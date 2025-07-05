import { cn } from '@/utils/cn'

type Props = React.TableHTMLAttributes<HTMLTableElement> & {
  children: React.ReactNode
}

const Table = ({ children, className, ...tableProps }: Props) => (
  <div className="relative overflow-x-auto">
    <table
      className={cn(
        'w-full text-sm text-left rtl:text-right text-gray-500',
        className,
      )}
      {...tableProps}
    >
      {children}
    </table>
  </div>
)

export { Table }
