import { Button } from '@/components/ui/button'
import React from 'react'

function Home() {
  return (
  <>
    <Button>page</Button>
    <Button style={{
        // You can set these dynamically if needed
        '--body-bg': '#f0f0f0',
        '--button-bg': '#ff3366',
      } as React.CSSProperties}></Button>
  </>)
}

export default Home