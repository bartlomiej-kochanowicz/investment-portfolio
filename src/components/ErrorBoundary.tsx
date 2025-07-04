import type { ErrorInfo, ReactNode } from 'react'
import React, { Component } from 'react'

interface Props {
  children?: ReactNode
}

interface State {
  error: Error | null
  info: ErrorInfo | null
}
class ErrorBoundary extends Component<Props, State> {
  state = {
    error: null,
    info: null,
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.setState({ error, info })
  }

  render(): ReactNode {
    const { error } = this.state
    if (error) {
      //Sentry.captureException(error)
      return <ErrorBoundaryFallbackComponent />
    }
    return this.props.children
  }
}

export default ErrorBoundary

export const ErrorBoundaryFallbackComponent: React.FC<
  React.PropsWithChildren<unknown>
> = () => (
  <main>
    <section>
      Something Error Ooccurring
      <span role="img" aria-label="face-emoji">
        😞
      </span>
    </section>
  </main>
)
