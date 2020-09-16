import React from 'react'

import SectionButtonTitle from '../SectionButtonTitle/SectionButtonTitle'
import Bed from '../Bed/Bed'
import BedSimulator from '../BedSimulator/BedSimulator'

function Beds() {
    return (
        <section className='section-separator'>
            <SectionButtonTitle
                sectionName='beds-section'
                title='Camas'
            />
            <Bed
                bedCode={0}
                separator='section-break-separator'
            />
            <Bed
                bedCode={1}
                separator='section-item-item-separator'
            />
            <Bed
                bedCode={2}
                separator='section-item-item-separator'
            />
            <Bed
                bedCode={3}
                separator='section-item-item-separator'
            />
            <BedSimulator />
        </section>
    )
}

export default Beds
