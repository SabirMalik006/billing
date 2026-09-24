import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../../contexts/AuthContext'
import { setUnreadCount, playAlarm } from '../../utils/liveChat'
import { Headset } from 'lucide-react'

const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function ChatAlarmPoller() {
  const { token } = useAuth()
  const [toast, setToast] = useState(null)
  const lastTotalRef = useRef(0)
  const prevCountsRef = useRef({})
  const initializedRef = useRef(false)
  const dismissTimerRef = useRef(null)

  const scheduleDismiss = useCallback(() => {
    clearTimeout(dismissTimerRef.current)
    dismissTimerRef.current = setTimeout(() => setToast(null), 5000)
  }, [])

  const showToast = useCallback((text) => {
    setToast({ id: Date.now(), text })
    scheduleDismiss()
  }, [scheduleDismiss])

  const poll = useCallback(async () => {
    if (!token) return
    try {
      const res = await fetch(`${API}/api/chat/admin/conversations`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      if (!Array.isArray(data)) return

      const total = data.reduce((sum, s) => sum + (s.adminUnread || 0), 0)
      setUnreadCount(total)

      const nowCounts = {}
      let newSession = null
      const bumped = []
      data.forEach((s) => {
        const id = s.sessionId
        nowCounts[id] = s.adminUnread || 0
        if (!(id in prevCountsRef.current)) {
          newSession = newSession || s
        } else if ((s.adminUnread || 0) > (prevCountsRef.current[id] || 0)) {
          bumped.push(s)
        }
      })

      // First run after mount: just snapshot, don't alarm for pre-existing state
      if (!initializedRef.current) {
        initializedRef.current = true
        lastTotalRef.current = total
        prevCountsRef.current = nowCounts
        return
      }

      const anyChange = total > lastTotalRef.current || newSession !== null
      if (anyChange) {
        playAlarm()
        const source = newSession || (bumped.length > 0 ? bumped[bumped.length - 1] : null)
        const who = source ? source.visitorName || 'a visitor' : 'a visitor'
        showToast(newSession ? `New live chat from ${who}` : `New message from ${who}`)
      }

      lastTotalRef.current = total
      prevCountsRef.current = nowCounts
    } catch { /* ignore network errors */ }
  }, [token, showToast])

  useEffect(() => {
    const first = setTimeout(poll, 0)
    const id = setInterval(poll, 4000)
    return () => {
      clearTimeout(first)
      clearInterval(id)
      clearTimeout(dismissTimerRef.current)
    }
  }, [poll])

  return (
    <AnimatePresence>
      {toast && (
        <motion.button
          key={toast.id}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
          onClick={() => { clearTimeout(dismissTimerRef.current); setToast(null) }}
          className="fixed top-20 right-4 md:right-6 z-[100] flex items-center gap-3 rounded-2xl border border-[#4486BF]/25 bg-white px-5 py-4 shadow-2xl shadow-[#0B2348]/15"
        >
          <span className="relative flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#4486BF] text-white">
            <Headset size={18} />
            <span className="absolute -top-1 -right-1 flex size-4 animate-pulse items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white ring-2 ring-white">
              !
            </span>
          </span>
          <span className="text-left">
            <span className="block text-sm font-bold text-[#0B2348]">{toast.text}</span>
            <span className="block text-[11px] text-[#5A6B82]">Open Live Chat to reply</span>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
}