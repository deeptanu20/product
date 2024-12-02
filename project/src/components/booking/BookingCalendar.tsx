
import { Calendar, Clock } from 'lucide-react';
import { cn } from '../../lib/utils';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface BookingCalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
  availableTimeSlots: TimeSlot[];
}

export function BookingCalendar({
  selectedDate,
  onDateSelect,
  selectedTime,
  onTimeSelect,
  availableTimeSlots,
}: BookingCalendarProps) {
  const dates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Select Date
        </h3>
        <div className="grid grid-cols-7 gap-2">
          {dates.map((date) => (
            <button
              key={date.toISOString()}
              onClick={() => onDateSelect(date)}
              className={cn(
                "p-2 rounded-lg text-sm",
                date.toDateString() === selectedDate.toDateString()
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              )}
            >
              <div className="text-center">
                <div className="text-xs">
                  {date.toLocaleDateString('en-US', { weekday: 'short' })}
                </div>
                <div className="font-semibold">
                  {date.getDate()}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Select Time
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {availableTimeSlots.map(({ time, available }) => (
            <button
              key={time}
              onClick={() => available && onTimeSelect(time)}
              disabled={!available}
              className={cn(
                "p-2 rounded-lg text-sm",
                !available && "opacity-50 cursor-not-allowed",
                available && selectedTime === time && "bg-blue-600 text-white",
                available && selectedTime !== time && "hover:bg-gray-100"
              )}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}