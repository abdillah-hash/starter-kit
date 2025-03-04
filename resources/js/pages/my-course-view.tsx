import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'My Course',
        href: '/my-course-view',
    },
];

export default function MyCourse() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Materi Pertemuan" />

            <div className="bg-gray-100 p-6 min-h-screen">
                <div className="max-w-2xl mx-auto bg-white p-4 rounded-lg shadow-md">
                    <div className="space-y-2">
                        <details className="border rounded-md open:bg-gray-100 open:border-gray-300">
                            <summary className="p-3 bg-gray-200 cursor-pointer font-semibold">
                                Pertemuan 1
                            </summary>
                            <div className="p-4 space-y-2">
                                <h3 className="text-gray-700 font-semibold">Deskripsi</h3>
                                <p className="text-gray-700 text-sm">
                                    Pada pertemuan pertama, kita akan mengenal dasar-dasar pemrograman, memahami apa itu bahasa pemrograman, serta bagaimana komputer mengeksekusi kode. Selain itu, peserta akan belajar tentang berbagai bahasa pemrograman populer dan cara menyiapkan lingkungan coding. Di akhir sesi, peserta akan mencoba menjalankan program pertama mereka: "Hello, World!".

                                </p>
                                <ul className="list-disc ml-5 text-sm text-blue-600">
                                    <li><a href="#" className="hover:underline">Materi: Apa itu pemrograman, Bahasa pemrograman populer</a></li>
                                    <li><a href="#" className="hover:underline">Google Meet: Bergabung di sini</a></li>
                                    <li><a href="#" className="hover:underline">Tugas: Menjalankan kode pertama: "Hello, World!"</a></li>
                                </ul>
                            </div>
                        </details>

                        <details className="border rounded-md open:bg-gray-100 open:border-gray-300">
                            <summary className="p-3 bg-gray-200 cursor-pointer font-semibold">
                                Pertemuan 2
                            </summary>
                            <div className="p-4 space-y-2">
                                <h3 className="text-grey-500 font-semibold">Deskripsi</h3>
                                <p className="text-gray-700 text-sm">
                                Variabel adalah dasar dalam pemrograman. Pada pertemuan ini, peserta akan belajar bagaimana menyimpan dan mengelola data menggunakan variabel. Kita juga akan membahas berbagai tipe data seperti string, integer, float, dan boolean. Sebagai latihan, peserta akan membuat program sederhana menggunakan variabel untuk menyimpan dan menampilkan informasi.


                                </p>
                                <ul className="list-disc ml-5 text-sm text-blue-600">
                                    <li><a href="#" className="hover:underline">Materi: Pengenalan variabel dan cara mendeklarasikannya, Tipe data: String, Integer, Float, Boolean</a></li>
                                    <li><a href="#" className="hover:underline">Google Meet: Bergabung di sini</a></li>
                                    <li><a href="#" className="hover:underline">Tugas: Membuat program sederhana dengan variabel                                    </a></li>
                                </ul>
                            </div>
                        </details>

                    </div>
                </div>
            </div>

        </AppLayout>
    );
}
