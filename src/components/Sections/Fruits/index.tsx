import { PrevNext as PrevNextButtons, Title } from ".."

import Container from "../../Container"
import { FilterFood } from "../../../utils/filters"
import { useState } from "react"

const Fruits = () => {
  const fruits = FilterFood("chicken")
  const [scrollValue, setScrollValue] = useState(0)


  return (
    <section className="w-full my-5">
        <div className="w-full flex items-center justify-between">
          <Title title="Our fresh & healthy dishes" />
          <PrevNextButtons onNext={() => setScrollValue(10000)} onPrev = {() => setScrollValue(-10000)} />
        </div>
        <Container className="bg-containerbg" scrollOffset = {scrollValue} items = {fruits} />
    </section>
  )
}

export default Fruits