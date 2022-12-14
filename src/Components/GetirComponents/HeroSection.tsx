import { memo, useCallback, useEffect, useRef, useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'
import { Transition } from '@headlessui/react'
import { HERO_SLIDES } from './api/hero'

type Props = {}

const HeroSection = (props: Props) => {
  const [step, setStep] = useState(HERO_SLIDES)
  const [wrapperWidth, setWrapperWidth] = useState(1)
  const [selected, setSelected] = useState('TR')

  const wrapper = useRef(null)

  const nextStep = useCallback(() => {
    setStep((prev) => {
      const newSteps = structuredClone(prev)
      const index = prev.findIndex((item) => item.selected)

      if (index === prev.length - 1) {
        newSteps[0].selected = true
        newSteps[1].selected = false
        newSteps[2].selected = false
        newSteps[3].selected = false
      } else {
        newSteps.forEach((item, i) => {
          if (i === index + 1) {
            item.selected = true
          } else {
            item.selected = false
          }
        })
      }
      return newSteps
    })
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

  useEffect(() => {
    const timer = setInterval(() => {
      nextStep()
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  // validate phone regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im

  return (
    <div className="relative h-[500px] bg-white flex before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10 ">
      <div
        className="flex items-start overflow-hidden w-96 sm:w-full"
        ref={wrapper}
      >
        <div className="flex flex-nowrap ">
          {step?.length &&
            step.map((s, i) => (
              <Transition
                show={s.selected}
                appear={false}
                unmount={false}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-96 opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="transform transition ease-in-out duration-500 "
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="-translate-x-96 opacity-0"
                className="bg-blue-200 w-0 overflow-visible"
                as="div"
                key={s.href}
              >
                <div style={{ width: `${wrapperWidth}px` }}>
                  <img
                    className="object-cover h-[500px] w-full"
                    src={s.href}
                    alt={`Hero image ${i}`}
                  />
                </div>
              </Transition>
            ))}
        </div>
      </div>

      <div className="absolute container flex justify-between items-center top-0 left-1/2 -translate-x-1/2 h-full z-20">
        <div className="flex flex-col gap-y-10">
          <img
            className="h-44 w-44"
            src="../images/getir-bir-mutluluk.svg"
            alt="getir-logo"
          />
          <h3 className="font-semibold text-white text-4xl">
            Dakikalar i??inde kap??n??zda
          </h3>
        </div>
        <div className="flex flex-col gap-4 bg-gray-50 p-6 rounded-lg w-[400px]">
          <h4 className="text-primary-brand-color text-center font-semibold w-full">
            Giri?? yap veya kay??t ol
          </h4>
          <div className="flex gap-2 group">
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              countries={['TR', 'US', 'GB', 'DE', 'FR', 'IT', 'ES', 'NL']}
              customLabels={{
                TR: '+90',
                US: '+1',
                GB: '+44',
                DE: '+49',
                FR: '+33',
                IT: '+39',
                ES: '+34',
                NL: '+31',
              }}
              className="custom-flags rounded"
            />

            <label className="flex-1 block relative">
              <input
                className="rounded pt-5 text-sm border-gray-400 border-2 w-full h-[54px] group-hover:border group-active:border group-f??c group-hover:border-primary-brand-color hover:border-primary-brand-color  active:border-primary-brand-color focus-visible:border-primary-brand-color outline-none transition-colors peer"
                type="tel"
                id="phone"
                name="phone"
                required
              />
              <span className="absolute top-0 left-3 h-[53px] w-full flex items-center text-gray-500 peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-sm transition-all  peer-valid:text-primary-brand-color peer-valid:text-sm peer-valid:h-7">
                Telefon numaras??
              </span>
            </label>
          </div>
          <button className="w-full rounded-md bg-brand-color-yellow text-brand-color hover:text-brand-color-yellow hover:bg-brand-color transition-all p-4">
            Telefon numaras?? ile devam et
          </button>
        </div>
      </div>
    </div>
  )
}

export default memo(HeroSection)
