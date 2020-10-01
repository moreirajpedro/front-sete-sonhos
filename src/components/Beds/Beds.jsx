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
                separator='section-break-separator'
            />
            <Bed
                bedCode={2}
                separator='section-break-separator'
            />
            <Bed
                bedCode={3}
                separator='section-break-separator'
            />
            <Bed
                bedCode={4}
                separator='section-break-separator'
            />
            <Bed
                bedCode={5}
                separator='section-break-separator'
            />
        </section>
    )
}

export default Beds
