import { Card, CardContent } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { ClipboardList } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Attendance',
        href: '/attendance',
    },
];

export default function Attendance() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Attendance" />
            {/* Grid Card Section */}
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                {/* Card 1 */}
                <Card className='overflow-hidden rounded-2xl'>
                    {/* Konten Card 1 */}
                </Card>
                {/* Card 2 */}
                <Card className='overflow-hidden rounded-2xl'>
                    {/* Konten Card 2 */}
                </Card>
                {/* Card 3 */}
                <Card className='overflow-hidden rounded-2xl'>
                    {/* Konten Card 3 */}
                </Card>
            </div>

            {/* Announcements Section dengan Latar Belakang Berbeda */}
            <div className="grid grid-cols-1 gap-8 mt-8">
            <Card className="overflow-hidden rounded-2xl bg-[#D9D9D9] p-4">
                <div className="flex items-center gap-2">
                    <ClipboardList className="w-6 h-6 text-gray-700" />
                    <h2 className="text-2xl font-bold">Attendance</h2>
                </div>
            </Card>
            <Card className='overflow-hidden rounded-2xl bg-[#D9D9D9]'>
                <CardContent className="p-2">
                    <div className="space-y-4">
                        {/* <!-- Card Item --> */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold">Pemrograman Dasar</h2>
                                <p className="text-gray-500 text-sm">12 July, 2025 • 2 jam tersisa</p>
                            </div>
                            <p className="text-gray-600">Pertemuan 1</p>

                            <div className="flex items-center mt-2 space-x-2">
                                <button className="px-4 py-2 text-white bg-black rounded-lg">Hadir</button>
                                <button className="px-4 py-2 text-black bg-gray-200 rounded-lg">Izin</button>
                                <button className="px-4 py-2 text-black bg-gray-200 rounded-lg">Tidak Masuk</button>
                            </div>

                        </div>
                    </div>
                </CardContent>
            </Card>
</div>
        <div className="grid grid-cols-1 gap-8 mt-5">
        <Card className='overflow-hidden rounded-2xl bg-[#D9D9D9]'>
        <CardContent className="p-2">
                    <div className="space-y-4">
                        {/* <!-- Card Item --> */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold">Pemrograman Dasar</h2>
                                <p className="text-gray-500 text-sm">12 Aug, 2025 • 2 jam tersisa</p>
                            </div>
                            <p className="text-gray-600">Pertemuan 2</p>

                            <div className="flex items-center mt-2 space-x-2">
                                <button className="px-4 py-2 text-white bg-black rounded-lg">Hadir</button>
                                <button className="px-4 py-2 text-black bg-gray-200 rounded-lg">Izin</button>
                                <button className="px-4 py-2 text-black bg-gray-200 rounded-lg">Tidak Masuk</button>
                            </div>

                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-5">
        <Card className='overflow-hidden rounded-2xl bg-[#D9D9D9]'>
        <CardContent className="p-2">
                    <div className="space-y-4">
                        {/* <!-- Card Item --> */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold">Pemrograman Dasar</h2>
                                <p className="text-gray-500 text-sm">12 Sep, 2025 • 2 jam tersisa</p>
                            </div>
                            <p className="text-gray-600">Pertemuan 3</p>

                            <div className="flex items-center mt-2 space-x-2">
                                <button className="px-4 py-2 text-white bg-black rounded-lg">Hadir</button>
                                <button className="px-4 py-2 text-black bg-gray-200 rounded-lg">Izin</button>
                                <button className="px-4 py-2 text-black bg-gray-200 rounded-lg">Tidak Masuk</button>
                            </div>

                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
        </AppLayout>
    );
}
