import { ArrowUpRight } from 'lucide-react'

export default function TeamCard({ member, onSelect }) {
  const Comp = onSelect ? 'button' : 'div'
  const cardProps = onSelect
    ? { type: 'button', onClick: () => onSelect(member), 'aria-label': `View ${member.name}'s profile`, className: 'group w-full' }
    : { className: 'group block w-full' }

  return (
    <Comp {...cardProps}>
      <div className="relative overflow-hidden rounded-2xl border border-mbx-border bg-mbx-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-mbx-teal/15 hover:border-mbx-teal/30">
        <div className="aspect-[4/5] w-full overflow-hidden bg-[#EDF3F9]">
          <img
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
        </div>
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/85 to-transparent pt-12 pb-3 px-4 transition-opacity duration-500 ${
            onSelect ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-mbx-teal">{member.specialty}</span>
          <h3 className="text-[15px] font-extrabold leading-tight text-mbx-navy">{member.name}</h3>
          <p className="mt-0.5 text-xs font-medium text-mbx-text-muted">{member.role}</p>
        </div>
        {onSelect && (
          <div className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full bg-white/90 text-mbx-navy shadow-md backdrop-blur transition-all duration-500 group-hover:bg-mbx-teal group-hover:text-white">
            <ArrowUpRight size={16} />
          </div>
        )}
      </div>
      {!onSelect && (
        <div className="pt-3 px-1">
          <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-mbx-teal">{member.specialty}</span>
          <h3 className="text-[15px] font-extrabold leading-tight text-mbx-navy">{member.name}</h3>
          <p className="mt-0.5 text-xs font-medium text-mbx-text-muted">{member.role}</p>
        </div>
      )}
    </Comp>
  )
}