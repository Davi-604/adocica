import { getWebsiteData } from '@/services/website';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Props = {
    small?: boolean;
};
export const Logo = ({ small }: Props) => {
    const [logo, setLogo] = useState<string | null>(null);

    const router = useRouter();

    const handleGetLogo = async () => {
        const req = await getWebsiteData();
        setLogo(req.icon);
    };

    useEffect(() => {
        handleGetLogo();
    }, []);

    return (
        <>
            {logo && (
                <img
                    onClick={() => router.push('/')}
                    src={logo}
                    alt="Logo"
                    className={`max-w-[100px] lg:max-w-[150px] transition-all ease-in 
                    ${small ? 'max-w-[70px] lg:max-w-[80px]' : ''}`}
                />
            )}
        </>
    );
};
