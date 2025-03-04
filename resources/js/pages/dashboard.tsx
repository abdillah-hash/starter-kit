import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import gambar from '../../assets/example01.png';
import gambar2 from '../../assets/example02.png';
import gambar3 from '../../assets/example03.png';
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
                            <a href='my-course'>View More</a>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

                    {/* Announcements Section */}
                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">Announcements</h2>
                        <Card>
                            <CardContent className="p-4">
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-500">12 July, 2025</p>
                                        <p className="font-medium">Welcome to IDN! For Everyone</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">12 Aug, 2025</p>
                                        <p className="font-medium">Welcome to IDN! For Everyone</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">12 Sep, 2025</p>
                                        <p className="font-medium">Welcome to IDN! For Everyone</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Attendances Section */}
                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">Attendances</h2>
                        <Card>
                            <CardContent className="p-4">
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-500">12 July, 2025</p>
                                        <p className="font-medium">Pertemuan Pertama</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">12 Aug, 2025</p>
                                        <p className="font-medium">Pertemuan Kedua</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">12 Sep, 2025</p>
                                        <p className="font-medium">Pertemuan Ketiga</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                </div>
            </div>
        </AppLayout>
    );
}