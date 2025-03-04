import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import gambar from '../../assets/example01.png';
import gambar2 from '../../assets/example02.png';
import gambar3 from '../../assets/example03.png';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'My Course',
        href: '/my-course',
    },
];

export default function MyCourse() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="My Course" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {/* Card 1 */}
                    <Card className='overflow-hidden rounded-2xl'>
                        <img src={gambar} className='object-contain' alt="Course Thumbnail" />
                        <CardHeader>
                            Pemrograman Dasar
                        </CardHeader>
                        <CardContent>
                            <CardTitle className='font-bold'>
                                Pertemuan 1
                            </CardTitle>
                            <CardDescription className='flex items-center gap-2'>
                                <GraduationCap size={20} color='#ff782d' />
                                200 Students
                            </CardDescription>
                        </CardContent>
                        <hr className='mx-6' />
                        <CardFooter className='justify-end font-medium py-4 text-lg'>
                            View More
                        </CardFooter>
                    </Card>

                    {/* Card 2 */}
                    <Card className='overflow-hidden rounded-2xl'>
                        <img src={gambar2} className='object-contain' alt="Course Thumbnail" />
                        <CardHeader>
                            Pemrograman Dasar
                        </CardHeader>
                        <CardContent>
                            <CardTitle className='font-bold'>
                                Pertemuan 2
                            </CardTitle>
                            <CardDescription className='flex items-center gap-2'>
                                <GraduationCap size={20} color='#ff782d' />
                                200 Students
                            </CardDescription>
                        </CardContent>
                        <hr className='mx-6' />
                        <CardFooter className='justify-end font-medium py-4 text-lg'>
                            View More
                        </CardFooter>
                    </Card>

                    {/* Card 3 */}
                    <Card className='overflow-hidden rounded-2xl'>
                        <img src={gambar3} className='object-contain' alt="Course Thumbnail" />
                        <CardHeader>
                            Pemrograman Dasar
                        </CardHeader>
                        <CardContent>
                            <CardTitle className='font-bold'>
                                Pertemuan 3
                            </CardTitle>
                            <CardDescription className='flex items-center gap-2'>
                                <GraduationCap size={20} color='#ff782d' />
                                200 Students
                            </CardDescription>
                        </CardContent>
                        <hr className='mx-6' />
                        <CardFooter className='justify-end font-medium py-4 text-lg'>
                            View More
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
}
