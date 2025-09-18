
import React from 'react';

const MateriView: React.FC = () => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-2">Materi Pembelajaran</h2>
            <div className="prose lg:prose-xl max-w-none text-gray-700">
                <p>
                    Selamat datang di media pembelajaran interaktif mengenai persebaran flora dan fauna di dunia.
                    Gunakan <strong>Peta Interaktif</strong> untuk menjelajahi berbagai benua dan menemukan
                    hewan serta tumbuhan khas dari setiap wilayah.
                </p>
                <p>
                    Setelah Anda merasa cukup belajar, uji pengetahuan Anda dengan mengerjakan <strong>Kuis Interaktif</strong>.
                </p>
                <h3 className="mt-6 font-semibold">Tujuan Pembelajaran</h3>
                <ul className="list-disc list-outside ml-5">
                    <li>Mengidentifikasi flora dan fauna khas dari berbagai benua.</li>
                    <li>Memahami konsep persebaran makhluk hidup di Bumi.</li>
                    <li>Meningkatkan kesadaran akan keanekaragaman hayati.</li>
                </ul>
                <p className="mt-8 text-center text-gray-500">
                    <em>Konten materi lebih lanjut akan ditambahkan di sini.</em>
                </p>
            </div>
        </div>
    );
};

export default MateriView;
