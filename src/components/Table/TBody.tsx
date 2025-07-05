type Props = React.HTMLAttributes<HTMLTableSectionElement> & {
  children: React.ReactNode
}

const TBody = ({ children, ...rest }: Props) => <tbody {...rest} />

export { TBody }
