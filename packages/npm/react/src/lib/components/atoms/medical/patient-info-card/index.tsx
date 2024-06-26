
import {Radio , RadioGroup, Text} from '@mantine/core';
import { Anchor, ThemeIcon } from '@mantine/core';
import { IconPhone } from "@tabler/icons-react";
import { RegistryTreatment } from '@akello/core';
import { SessionBtn } from '../session-btn';
import { MeasureTypes } from '@akello/core';

export interface PatientInfoCardProps {
    selectedPatient: RegistryTreatment
    onReviewTypeSelect: (reviewType: MeasureTypes) => void
}

export const PatientInfoCard:React.FC<PatientInfoCardProps> = ({selectedPatient, onReviewTypeSelect}) => {

    return (
        <>
            <div className='p-4'>
                <SessionBtn
                    onReviewTypeSelect={((reviewType: MeasureTypes) => {
                        onReviewTypeSelect(reviewType)
                    })}
                />
            </div>
            <div className={"flex flex-row justify-between border-b border-1 px-3 py-2"}>
                <div className='flex flex-col'>
                    <div className={"text-xl font-semibold"}>
                        {selectedPatient.first_name} {selectedPatient.last_name}
                    </div>
                    <Anchor size="md" href={"mailto:" + selectedPatient.email} target="_blank">
                        {selectedPatient.email}
                    </Anchor>
                    <div className={"text-sm"}>
                        Referring NPI: {selectedPatient.referring_npi}
                    </div>

                </div>
                <div>
                    <div className='flex flex-row space-x-3'>
                        <ThemeIcon size='sm'>
                            <IconPhone />
                        </ThemeIcon>
                        <a className={'text-md'} href={'tel:' + selectedPatient.phone_number}>{selectedPatient.phone_number}</a>
                    </div>
                </div>

            </div>


        </>
    )


}