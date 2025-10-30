import React from 'react'

const router = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/agendamentos" element={<Agendamentos />} />
        </Routes>
      </Router>
    </>
  )
}

export default router
