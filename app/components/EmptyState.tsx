const EmptyState = () => {
  return (
    <div
      className="
        flex
        px-4
        py-10
        sm:px-6
        lg:px-8
        h-full
        justify-center
        items-center
        bg-gray-100
      "
    >
      <div 
        className="
          text-center 
          items-center 
          flex
          flex-col
        ">
          <h3
            className="
              mt-2
              text-2xl
              font-samibold
              text-gray-900
            "
          >Select a chat or start new conversation!</h3>
      </div>
    </div>
  )
}

export default EmptyState;