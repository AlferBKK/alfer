import { useState } from 'react'
import { Listbox } from '@headlessui/react'
export default function OfferInput() {
  return (
    <textarea
          id="input"
          name="input"
          className=" w-[15rem] h-[15rem] overflow-y-hidden break-words rounded-xl border-0 bg-white p-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 border-gray-950 border-1 sm:leading-6"
    />
  )
}