
const ErrorFallBack = () => {
    return (
        <div role="alert" style={{fontSize:"3rem"}}>
      There was an error:{' '}
      <pre style={{whiteSpace: 'normal'}}>Something went wrong. The developer has been notified</pre>
      <h6>Please Refresh your application and Try Again</h6>
    </div>
    )
}

export default ErrorFallBack
