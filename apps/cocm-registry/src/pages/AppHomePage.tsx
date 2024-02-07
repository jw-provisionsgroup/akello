import React, { useState, useEffect } from 'react';
import { useAkello } from "@akello/react-hook";
import { useNavigate } from 'react-router-dom';
import { Grid, Container } from '@mantine/core';
import { Registry } from '@akello/core';
import { RegistryMemberships, WelcomeBanner, Loader, RegistrySelectRow } from "@akello/react";
import RegistryCard from '../components/RegistryCard';

interface AppHomePageProps {
    drawerHandlers: any;
}

const AppHomePage: React.FC<AppHomePageProps> = ({ drawerHandlers }) => {
    const akello = useAkello();
    const navigate = useNavigate();
    const [registries, setRegistries] = useState<Registry[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        akello.userService.getUserRegistries((data) => {
            const registries = data.map((registry: any) => {
                return new Registry(
                    registry['id'],
                    registry['name'],
                    registry['active_patients'],
                    registry['questionnaires'],
                    {}
                );
            });
            setRegistries(registries);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="overscroll-hidden overscroll-none space-y-12">
            <WelcomeBanner first_name={"Vijay"} />
            <div className='space-y-3'>
                {!isLoading && registries.map((registry: Registry) => (
                    <RegistryCard
                        registry={registry}
                        avatars={[
                            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
                            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png'
                        ]}
                    />
                ))}
            </div>
        </div>
    );
}

export default AppHomePage;
