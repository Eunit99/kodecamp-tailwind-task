export default function Button({ text }) {
  return (
    <>
      <button className="bg-blue-800 shadow-sm text-white p-3 sm:px-12 sm:py-3 rounded-lg">
        {text}
      </button>
    </>
  )
}