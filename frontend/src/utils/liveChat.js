import { useState, useEffect } from 'react'

export const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export function getSessionId() {
  let id = localStorage.getItem('mbx_chat_session')
  if (!id) {
    id = `v_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`
    localStorage.setItem('mbx_chat_session', id)
  }
  return id
}

let unread = 0
const listeners = new Set()

export function setUnreadCount(n) {
  unread = n
  listeners.forEach((fn) => fn(unread))
}

export function getUnreadCount() {
  return unread
}

export function subscribeUnread(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

export function useUnreadCount() {
  const [count, setCount] = useState(unread)
  useEffect(() => subscribeUnread(setCount), [])
  return count
}

let audioCtx = null
export function playAlarm() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    if (audioCtx.state === 'suspended') audioCtx.resume()
    const now = audioCtx.currentTime
    const osc = audioCtx.createOscillator()
    const gain = audioCtx.createGain()
    osc.connect(gain)
    gain.connect(audioCtx.destination)
    osc.type = 'sine'
    osc.frequency.setValueAtTime(880, now)
    osc.frequency.setValueAtTime(660, now + 0.12)
    gain.gain.setValueAtTime(0.00001, now)
    gain.gain.exponentialRampToValueAtTime(0.25, now + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.00001, now + 0.3)
    osc.start(now)
    osc.stop(now + 0.32)
  } catch {
    /* audio unsupported — fallback silently */
  }
}

export async function startChatSession(name = '') {
  return fetch(`${API}/api/chat/start`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId: getSessionId(), name }),
  }).then((r) => r.json())
}

export async function sendVisitorMessage(text, name = '') {
  return fetch(`${API}/api/chat/${getSessionId()}/messages`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text, name }),
  }).then((r) => r.json())
}

export async function fetchVisitorMessages(after) {
  const q = after ? `?after=${encodeURIComponent(after)}` : ''
  return fetch(`${API}/api/chat/${getSessionId()}/messages${q}`).then((r) => r.json())
}

export async function markVisitorRead() {
  return fetch(`${API}/api/chat/${getSessionId()}/read`, { method: 'POST' })
}