import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'
import { useSearchStore } from '@/src/state/store'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const DateRangeComp = () => {
  const { selectedDateRange, setDateRange } = useSearchStore()
  const range = selectedDateRange[0]
  const [open, setOpen] = useState(false)
  const refOne = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('keydown', hideOnEscape, true)
    document.addEventListener('click', hideOnClickOutside, true)
  }, [])

  // hide dropdown on ESC press
  const hideOnEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  // Hide on outside click
  const hideOnClickOutside = (e: MouseEvent) => {
    if (refOne.current && !refOne.current.contains(e.target as Node)) {
      setOpen(false)
    }
  }

  return (
    <div className="z-[100]">
      <input
        value={`${format(range?.startDate ?? new Date(), 'MM/dd/yyyy')} to ${format(
          range?.endDate ?? addDays(new Date(), 0),
          'MM/dd/yyyy',
        )}`}
        readOnly
        className="absolute p-3 text-center font-semibold text-black"
        onClick={() => setOpen((open) => !open)}
      />
      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) =>
              item.selection &&
              setDateRange([
                {
                  startDate: item.selection.startDate,
                  endDate: item.selection.endDate,
                  key: 'selection',
                },
              ])
            }
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range ? [range] : []}
            direction="horizontal"
            className="absolute h-96 rounded-lg"
          />
        )}
      </div>
    </div>
  )
}

export default DateRangeComp
