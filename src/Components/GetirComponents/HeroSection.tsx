import { useCallback, useEffect, useRef, useState } from 'react'
import { Transition } from '@headlessui/react'

type Props = {}

const HeroSection = (props: Props) => {
  const [step, setStep] = useState([
    { href: '', selected: true },
    { href: '', selected: false },
    { href: '', selected: false },
    { href: '', selected: false },
  ])

  const nextStep = useCallback(() => {
    setStep((prev) => {
      const newStep = structuredClone(prev);
      const index = prev.findIndex((item) => item.selected)
      console.log(step, index)

      if(index === prev.length - 1) {
        newStep[0].selected = true
        newStep[1].selected = false
        newStep[2].selected = false
        newStep[3].selected = false
      } else {
        newStep.forEach((item, i) => {
          if(i === index + 1) {
            item.selected = true
          } else {
            item.selected = false
          }
        })
      }
      return newStep
    })
  }, [step])

  const wrapper = useRef(null)
  const [wrapperWidth, setWrapperWidth] = useState(1)

  useEffect(() => {
    setInterval(() => {
      nextStep()
    }, 1000)
  }, [])

  useEffect(() => {
    function handleResize() {
      if (wrapper.current !== null) {
        setWrapperWidth(wrapper.current.offsetWidth)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="h-[500px] bg-white flex">
      <div
        className="flex items-start overflow-hidden w-96 sm:w-full"
        ref={wrapper}
      >
        <div className="flex flex-nowrap ">
          <Transition
            appear={false}
            unmount={false}
            show={step[0].selected}
            enter="transform transition ease-in-out duration-500"
            enterFrom={`translate-x-96 opacity-0`}
            enterTo={`translate-x-0 opacity-100`}
            leave="transform transition ease-in-out duration-500 "
            leaveFrom={`translate-x-0 opacity-100`}
            leaveTo={`-translate-x-full opacity-0`}
            className="w-0 bg-green-200 overflow-visible"
            as="div"
          >
            <div
              className="bg-green-200"
              style={{ width: `${wrapperWidth}px` }}
            >
              <h2>stuff</h2>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
            </div>
          </Transition>

          <Transition
            appear={false}
            unmount={false}
            show={step[1].selected}
            enter="transform transition ease-in-out duration-500"
            enterFrom={`translate-x-96 opacity-0`}
            enterTo={`translate-x-0 opacity-100`}
            leave="transform transition ease-in-out duration-500 "
            leaveFrom={`translate-x-0 opacity-100`}
            leaveTo={`-translate-x-96 opacity-0`}
            className="bg-red-200 w-0 overflow-visible"
            as="div"
          >
            <div style={{ width: `${wrapperWidth}px` }}>
              <h2>stuff 2</h2>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
            </div>
          </Transition>

          <Transition
            appear={false}
            unmount={false}
            show={step[2].selected}
            enter="transform transition ease-in-out duration-500"
            enterFrom={`translate-x-96 opacity-0`}
            enterTo={`translate-x-0 opacity-100`}
            leave="transform transition ease-in-out duration-500 "
            leaveFrom={`translate-x-0 opacity-100`}
            leaveTo={`-translate-x-96 opacity-0`}
            className="w-0 overflow-visible"
            as="div"
          >
            <div style={{ width: `${wrapperWidth}px` }}>
              <h2>stuff 3</h2>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
            </div>
          </Transition>

          <Transition
            appear={false}
            unmount={false}
            show={step[3].selected}
            enter="transform transition ease-in-out duration-500"
            enterFrom={`translate-x-96 opacity-0`}
            enterTo={`translate-x-0 opacity-100`}
            leave="transform transition ease-in-out duration-500 "
            leaveFrom={`translate-x-0 opacity-100`}
            leaveTo={`-translate-x-96 opacity-0`}
            className="bg-blue-200 w-0 overflow-visible"
            as="div"
          >
            <div style={{ width: `${wrapperWidth}px` }}>
              <h2>stuff 4</h2>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
              <p>blar blar blar</p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
