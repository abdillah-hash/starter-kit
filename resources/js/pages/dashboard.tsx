import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import gambar from '../../assets/image.png';
import { GraduationCap } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <Card className='overflow-hidden rounded-2xl'>
                        <img src={gambar} className='object-contain'></img>
                        <CardHeader>
                            Nama Matkul
                        </CardHeader>
                        <CardContent>
                            <CardTitle className='font-bold'>
                                Pertemuan 1
                            </CardTitle>
                            <CardDescription className='flex items-center gap-2'>
                                <GraduationCap size={20} color='#ff782d'/>
                                156 Students
                            </CardDescription>
                        </CardContent>
                            <hr className='mx-6'></hr>
                        <CardFooter className='justify-end font-medium py-4 text-lg'>

                            View More
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
