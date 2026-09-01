import { motion } from 'framer-motion'

export function StatCard({ icon: Icon, label, value, change, changeType = 'neutral', color = '#4486BF', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="group rounded-2xl border border-[#DEE4EB] bg-white p-5 transition-all duration-300 hover:shadow-lg hover:shadow-[#0B2348]/[0.04] hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between">
        <div className="flex size-11 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: `${color}12` }}>
          <Icon size={20} style={{ color }} strokeWidth={2} />
        </div>
        {change !== undefined && (
          <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${
            changeType === 'up' ? 'bg-emerald-50 text-emerald-600' :
            changeType === 'down' ? 'bg-red-50 text-red-500' :
            'bg-[#F5F8FA] text-[#5A6B82]'
          }`}>
            {changeType === 'up' && '↑'}
            {changeType === 'down' && '↓'}
            {change}
          </span>
        )}
      </div>
      <div className="mt-4">
        <p className="text-2xl font-extrabold text-[#0B2348] tracking-tight">{value}</p>
        <p className="mt-0.5 text-xs font-medium text-[#5A6B82]">{label}</p>
      </div>
    </motion.div>
  )
}

export function PageHeader({ title, subtitle, action, actionLabel, actionIcon: ActionIcon }) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-xl font-extrabold text-[#0B2348] tracking-tight">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-[#5A6B82]">{subtitle}</p>}
      </div>
      {action && (
        <button onClick={action} className="inline-flex items-center gap-2 rounded-xl bg-[#4486BF] px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-[#4486BF]/20 transition-all hover:bg-[#3a73a8] hover:shadow-lg hover:-translate-y-0.5">
          {ActionIcon && <ActionIcon size={16} />}
          {actionLabel}
        </button>
      )}
    </div>
  )
}

export function EmptyState({ icon: Icon, title, description, action, actionLabel, actionIcon: ActionIcon }) {
  return (
    <div className="rounded-2xl border border-dashed border-[#DEE4EB] bg-white px-6 py-16 text-center">
      <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-[#F5F8FA] text-[#5A6B82]">
        <Icon size={24} />
      </div>
      <h3 className="text-base font-extrabold text-[#0B2348]">{title}</h3>
      <p className="mt-1 text-sm text-[#5A6B82] max-w-sm mx-auto">{description}</p>
      {action && (
        <button onClick={action} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#4486BF] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#3a73a8]">
          {ActionIcon && <ActionIcon size={16} />}
          {actionLabel}
        </button>
      )}
    </div>
  )
}

export function SkeletonCard() {
  return (
    <div className="rounded-2xl border border-[#DEE4EB] bg-white p-5 animate-pulse">
      <div className="flex items-start justify-between">
        <div className="size-11 rounded-xl bg-[#F5F8FA]" />
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-7 w-20 rounded-lg bg-[#F5F8FA]" />
        <div className="h-3 w-28 rounded-lg bg-[#F5F8FA]" />
      </div>
    </div>
  )
}

export function SkeletonTable({ rows = 5 }) {
  return (
    <div className="rounded-2xl border border-[#DEE4EB] bg-white overflow-hidden animate-pulse">
      <div className="h-12 bg-[#F5F8FA] border-b border-[#DEE4EB]" />
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex items-center gap-4 border-b border-[#DEE4EB] px-6 py-4 last:border-0">
          <div className="size-10 rounded-xl bg-[#F5F8FA] shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="h-3.5 w-32 rounded bg-[#F5F8FA]" />
            <div className="h-3 w-48 rounded bg-[#F5F8FA]" />
          </div>
          <div className="h-6 w-16 rounded-full bg-[#F5F8FA]" />
        </div>
      ))}
    </div>
  )
}

export function Modal({ isOpen, onClose, title, children, maxWidth = 'max-w-lg' }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-[#0B2348]/40 backdrop-blur-sm" />
      <div
        onClick={e => e.stopPropagation()}
        className={`relative w-full ${maxWidth} rounded-2xl border border-[#DEE4EB] bg-white shadow-2xl shadow-[#0B2348]/10`}
      >
        <div className="flex items-center justify-between border-b border-[#DEE4EB] px-6 py-4">
          <h3 className="text-base font-extrabold text-[#0B2348]">{title}</h3>
          <button onClick={onClose} className="flex size-8 items-center justify-center rounded-lg text-[#5A6B82] hover:bg-[#F5F8FA] hover:text-[#0B2348] transition-all">
            <X size={18} />
          </button>
        </div>
        <div className="px-6 py-5">
          {children}
        </div>
      </div>
    </div>
  )
}

export function ConfirmDialog({ isOpen, onClose, onConfirm, title, message, confirmLabel = 'Delete', loading }) {
  if (!isOpen) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-[#0B2348]/40 backdrop-blur-sm" />
      <div onClick={e => e.stopPropagation()} className="relative w-full max-w-md rounded-2xl border border-[#DEE4EB] bg-white shadow-2xl shadow-[#0B2348]/10 p-6">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-red-50 text-red-500">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
        </div>
        <h3 className="text-center text-lg font-extrabold text-[#0B2348]">{title}</h3>
        <p className="mt-2 text-center text-sm text-[#5A6B82]">{message}</p>
        <div className="mt-6 flex gap-3">
          <button onClick={onClose} disabled={loading} className="flex-1 rounded-xl border border-[#DEE4EB] px-4 py-2.5 text-sm font-bold text-[#5A6B82] hover:border-[#0B2348]/20 hover:text-[#0B2348] transition-all disabled:opacity-50">
            Cancel
          </button>
          <button onClick={onConfirm} disabled={loading} className="flex-1 rounded-xl bg-red-500 px-4 py-2.5 text-sm font-bold text-white transition-all hover:bg-red-600 disabled:opacity-50">
            {loading ? 'Deleting...' : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

export function Toast({ message, type = 'success', onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      exit={{ opacity: 0, y: -20, x: '-50%' }}
      className={`fixed top-6 left-1/2 z-[100] flex items-center gap-3 rounded-xl border px-5 py-3 shadow-xl ${
        type === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' :
        type === 'error' ? 'border-red-200 bg-red-50 text-red-700' :
        'border-[#4486BF]/20 bg-[#4486BF]/10 text-[#4486BF]'
      }`}
    >
      <span className="text-sm font-semibold">{message}</span>
      <button onClick={onClose} className="text-current opacity-50 hover:opacity-100">✕</button>
    </motion.div>
  )
}
