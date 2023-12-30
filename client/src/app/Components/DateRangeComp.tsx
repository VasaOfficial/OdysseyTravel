import { useEffect, useRef, useState } from 'react'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

type RangeItem = {
  startDate: Date | undefined;
  endDate: Date | undefined;
  key: string;
}

const DateRangeComp = () => {
  const [range, setRange] = useState<RangeItem[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ])

  const [open, setOpen] = useState(false)

  // get the target element to toggle 
  const refOne = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  // hide dropdown on ESC press
  const hideOnEscape = (e: KeyboardEvent) => {
    if( e.key === "Escape" ) {
      setOpen(false)
    }
  }

  // Hide on outside click
  const hideOnClickOutside = (e: MouseEvent) => {
    if( refOne.current && !refOne.current.contains(e.target as Node) ) {
      setOpen(false)
    }
  }

  return (
    <div>
      <input
        value={`${format(range[0]?.startDate ?? new Date(), 'MM/dd/yyyy')} to ${format(
          range[0]?.endDate ?? addDays(new Date(), 7),
          'MM/dd/yyyy'
        )}`}        
        readOnly
        className="absolute text-black p-3 rounded-lg text-center font-semibold"
        onClick={ () => setOpen(open => !open) }
      />
      <div ref={refOne}>
        {open && 
          <DateRange
          onChange={(item) =>
            item.selection &&
            setRange([
              {
                startDate: item.selection.startDate,
                endDate: item.selection.endDate,
                key: 'selection',
              },
            ])
          }
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="absolute rounded-lg h-96"
          />
        }
      </div>

    </div>
  )
}

export default DateRangeComp