import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { useGlobalContext } from "@/utils/hooks";
import { DateRange } from "react-day-picker";

interface DateRangePickerProps {
  className?: string;
}

export default function DateRangePicker({ className }: DateRangePickerProps) {
  const {
    state: { dateRange: date },
    dispatch,
  } = useGlobalContext();

  const updateDateRange = (from: Date | undefined, to: Date | undefined) => {
    dispatch({
      type: "SET_DATE_RANGE",
      payload: {
        from,
        to,
      },
    });
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[260px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(newDate: DateRange | undefined) => {
              if (newDate) {
                updateDateRange(newDate.from, newDate.to);
              }
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
