import React from 'react'

function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center mt-52">
  <div
    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-white"
    role="status">
  </div>
</div>
  )
}

export default Spinner