import React, {Component, Fragment} from 'react';
import './Terms.scss';

const List = (props) => {
    if(props.data === undefined) return '';

    return (
        <Fragment>
            <ol>
                {
                    props.data.map( (item, index) => {
                        return(
                            <Fragment>
                                <li key={index}> {item.description} </li>
                                <List data={item.content} />
                            </Fragment>
                        );
                    })
                }
            </ol>
        </Fragment>
    );
}

class Terms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: {
                title: "Syarat Dan Ketentuan",
                description: [
                    "Selamat datang di www.mypangan.com",
                    "Syarat dan ketentuan yang ditetapkan dalam pemakaian jasa yang ditawarkan oleh MyPangan. Para pengguna diharapkan membaca seluruh syarat dan ketentuan dibawah karena berdampak pada hak dan kewajiban pengguna dalam hukum."
                ]
            },
            list: [
                {
                    title: "Definisi",
                    content: [
                        {
                            description: "MyPangan adalah suatu perseroan terbatas yang menjalankan kegiatan usaha jasa situs web portal www.mypangan.com, yakni situs jual beli pangan yang dijual oleh penjual terdaftar. Selanjutnya disebut MyPangan.",
                        },
                        {
                            description: "Situs web portal MyPangan adalah www.mypangan.com.",
                        },
                        {
                            description: "Aplikasi ini adalah milik MyPangan.",
                        },
                        {
                            description: "Perjanjian ini diatur dan dinterpretasikan berdasarkan Hukum Republik Indonesia (Indonesia). Pihak-pihak yang disebutkan dalam perjanjian dengan ini sepakat untuk tunduk kepada pengadilan di Indonesia.",
                        },
                        {
                            description: "Pengguna adalah pihak yang menggunakan situs jasa layanan MyPangan, termasuk namun tidak terbatas pada pembeli, penjual, driver maupun pihak lain yang sekedar berkunjung ke situs MyPangan.",
                        },
                        {
                            description: "Dengan mengakses atau menggunakan situs MyPangan, Pengguna secara sadar dan tanpa paksaan dari pihak manapun menyatakan diri setuju untuk menerima semua syarat dan ketentuan yang tercantum dalam perjanjian ini serta ketentuan-ketentuan lainnya yang berlaku di situs MyPangan. Sebagai Pengguna, Pengguna terikat dengan syarat dan ketentuan dalam perjanjian yang berlaku dalam hal Pengguna mengakses atau menggunakan situs MyPangan.",
                        },
                        {
                            description: "Pembeli adalah pengguna terdaftar yang melakukan permintaan atas barang yang dijual oleh penjual di situs MyPangan.",
                        },
                        {
                            description: "Penjual adalah pengguna terdaftar yang melakukan tindakan buka toko dan/atau melakukan penawaran atas suatu barang produk pangan kepada para pengguna situs MyPangan.",
                        },
                        {
                            description: "Pangan adalah benda yang berwujud dan/atau memiliki fisik barang pangan yang dapat diantar atau memenuhi seluruh kriteria pengiriman oleh perusahaan jasa pengiriman barang.",
                        },
                        {
                            description: "Penjual adalah pengguna terdaftar yang melakukan tindakan buka toko dan/atau melakukan penawaran atas suatu barang produk pangan kepada para pengguna situs MyPangan.",
                        },
                        {
                            description: "Perjanjian ini diatur dan ditafsirkan berdasarkan Hukum Indonesia. Segala perselisihan yang mungkin timbul antara Pengguna dengan kami sehubungan dengan penggunaan Situs MyPangan dan/atau pelaksanaan Perjanjian ini akan diselesaikan secara eksklusif dalam yurisdiksi pengadilan Republik Indonesia.",
                        },
                        {
                            description: "Perjanjian ini mungkin dapat diubah dan/atau diperbaharui setiap waktu dan kami akan mencaumkan perjanjian yang telah diubah atau diperbaharui di dalam status MyPangan. Persyaratan dan ketentuan yang telah diubah dan diperbaharui akan segera berlaku seelah persyaratan dan ketentuan yang telah diubah dan diperbaharui dicantumkan di situs MyPangan dan Pengguna diwajibkan untuk membaca syarat dan ketentuan dalam perjanjian ini dapat berubah sewaktu-waktu tanpa adanya pemberitahuan dari Pengguna. Dengan tetap mengakses dan menggunakan situs MyPangan, Pengguna setuju atas perubahan-perubahan dalam syarat dan ketentuan ini.",
                        }
                    ] 
                },
                {
                    title: "Transaksi Pembelian",
                    content: [
                        {
                            description: "Pembeli wajib bertransaksi melalui sistem prosedur transaksi yang telah ditetapkan oleh MyPangan. Pembeli melakukan pembayaran dengan menggunakan jenis metode pembayaran yang sebelumnya telah dipilih oleh pembeli.",
                        },
                        {
                            description: "Berdasarkan ketentuan poin 1 diatas selanjutnya  MyPangan akan meneruskan dana kepada pihak penjual apabila tahapan transaksi jual beli pada sistem MyPangan telah selesai.",
                        },
                        {
                            description: "Saat melakukan pembelian barang, Pembeli menyetujui bahwa:",
                            content: [
                                {
                                    description: "Pembeli bertanggung jawab untuk membaca, memahami dan menyetujui informasi/deskripsi keseluruhan barang (termasuk didalamnya namun tidak terbatas pada kualitas, kesegaran, dan lainnya) sebelum membuat tawaran atau komitmen untuk membeli."
                                },
                                {
                                    description: "Pembeli mengakui bahwa foto warna produk MyPangan  sebenarnya  sebagaimana terlihat di situs/aplikasi MyPangan tergantung pada monitor komputer dan layar handphone/smarthphone Pembeli. MyPangan telah melakukan upaya terbaik untuk memastikan warna dalam foto-foto yang ditampilkan pada situs website dan aplikasi MyPangan muncul seakurat mungkin, tetapi tidak dapat menjamin bahwa penampilan foto warna produk pada situs dan aplikasi MyPangan akurat."
                                },
                                {
                                    description: "Pengguna masuk ke dalam kontrak yang mengikat hukum untuk membeli barang dan/atau produk pangan ketika pengguna memutuskan untuk membeli suatu barang/produk MyPangan."
                                },
                                {
                                    description: "MyPangan tidak mengalihkan kepemilikan barang-barang / produk-produk MyPangan secara hukum atas barang-barang dari penjual kepada pembeli."
                                }
                            ]
                        },
                        {
                            description: "Pembeli memahami dan menyetujui bahwa ketersediaan stok barang merupakan tanggung jawab penjual yang menawarkan barang tersebut.",
                        },
                        {
                            description: "Bahwa ketentuan poin 4 diatas terkait ketersediaan stok barang dapat berubah sewaktu-waktu, jika  keadaan stok barang kosong (habis), maka penjual berhak untuk menolak order dan pembayaran atas barang yang bersangkutan dikembalikan kepada pembeli.",
                        },
                        {
                            description: "Pembeli mengetahui dan menyetujui bahwa harga yang tercantum pada situs MyPangan dapat mengalami perubahan secara sewaktu-waktu dan tanpa pemberitahuan terlebih dahulu.",
                        },
                        {
                            description: "Pembeli memahami sepenuhnya dan menyetujui bahwa segala transaksi yang dilakukan antara pembeli dan penjual selain melalui rekening resmi MyPangan dan/atau tanpa sepengetahuan MyPangan (melalui fasilitas dan/atau jaringan pribadi, pengiriman pesan, pengaturan transaksi khusus diluar situs MyPangan atau upaya lainnya) adalah merupakan tanggung jawab pribadi dari pembeli.",
                        },
                        {
                            description: "MyPangan memiliki kewenangan sepenuhnya untuk menolak pembayaran tanpa pemberitahuan terlebih dahulu.",
                        },
                        {
                            description: "Pembeli menyetujui dan memahami bahwa dengan menggunakan situs/aplikasi MyPangan pada saat pembeli melakukan transaksi pembelian, MyPangan akan meneruskan data informasi pembeli kepada penjual.",
                        },
                        {
                            description: "Pembayaran oleh pembeli wajib dilakukan segera (selambat-lambatnya 10 menit) setelah pembeli melakukan check-out. Jika dalam batas waktu tersebut pembayaran belum dilakukan oleh pembeli, MyPangan memiliki kewenangan untuk membatalkan transaksi tersebut. Pengguna tidak berhak mengajukan klaim atau tuntutan atas pembatalan transaksi tersebut.",
                        },
                        {
                            description: "Pengembalian dana dari MyPangan kepada pembeli hanya dapat dilakukan jika dalam keadaan-keadaan tertentu berikut ini:",
                            content: [
                                {
                                    description: "Masalah pengiriman barang telah teridentifikasi secara jelas dari penjual yang mengakibatkan pesanan barang tidak sampai."
                                },
                                {
                                    description: "Penjual tidak bisa menyanggupi order karena kehabisan stok dan penyebab lainnya."
                                },
                                {
                                    description: "Penyelesaian  permasalahan melalui customer service berupa keputusan akhir untuk pengembalian dana kepada pembeli atau berdasarkan hasil keputusan dari pihak MyPangan."
                                }
                            ]
                        },
                        {
                            description: "Pembeli wajib melakukan konfirmasi penerimaan barang setelah menerima kiriman barang yang dibeli. MyPangan akan memberikan batas waktu 2 (dua) hari setelah pengiriman berstatus “terkirim” pada sistem MyPangan.",
                        },
                        {
                            description: "Pembeli wajib melakukan konfirmasi penerimaan barang dalam batas waktu yang telah ditetapkan pada poin 11 ini. Jika dalam batas waktu tersebut tidak ada konfirmasi atau klaim dari pihak pembeli, maka dengan demikian pembeli menyatakan menyetujui dilakukannya konfirmasi penerimaan barang secara otomatis oleh sistem MyPangan.",
                        },
                        {
                            description: "Setelah ada konfirmasi penerimaan barang atau konfirmasi penerimaan barang otomatis, maka dana pihak pembeli akan diteruskan ke pihak penjual dan transaksi dianggap telah selesai.",
                        },
                        {
                            description: "Pembeli memahami dan menyetujui bahwa setiap klaim yang dilayangkan setelah adanya konfirmasi atau konfirmasi otomatis penerimaan barang adalah bukan menjadi tanggung jawab MyPangan. Kerugian yang timbul setelah adanya konfirmasi/konfirmasi otomatis penerimaan barang menjadi tanggung jawab pembeli secara pribadi.",
                        },
                        {
                            description: "Pembeli memahami dan menyetujui bahwa setiap masalah pengiriman barang  yang disebabkan keterlambatan pembayaran adalah merupakan tanggung jawab dari Pembeli;",
                        },
                        {
                            description: "MyPangan berwenang mengambil keputusan atas permasalahan-permasalahan transaksi yang belum terselesaikan akibat tidak adanya kesepakatan penyelesaian, baik antara penjual dan pembeli, dengan melihat bukti-bukti yang ada. Keputusan MyPangan adalah keputusan akhir yang tidak dapat diganggu gugat dan mengikat pihak penjual dan pembeli (PARA PIHAK) untuk mematuhinya.",
                        }
                    ] 
                },
                {
                    title: "Transaksi Penjualan",
                    content: [
                        {
                            description: "Penjual dilarang memanipulasi harga barang MyPangan dengan tujuan apapun",
                        },
                        {
                            description: "Penjual dilarang melakukan penawaran/berdagang barang terlarang sesuai dengan yang telah ditetapkan pada ketentuan Jenis Barang.",
                        },
                        {
                            description: "Ketentuan jenis barang yang dimaksud pada poin 1 dimaksud adalah segala jenis barang obat-obatan maupun zat-zat lain yang dilarang ataupun dibatasi peredarannya menurut ketentuan hukum yang berlaku, termasuk namun tidak terbatas pada ketentuan Undang-undang Psikotropika dan Undang-Undang Kesehatan.",
                        },
                        {
                            description: "Jenis Produk tertentu yang wajib memiliki:",
                            content: [
                                {
                                    description: "SNI",
                                },
                                {
                                    description: "Petunjuk penggunaan dalam bahasa Indonesia atau",
                                },
                                {
                                    description: "Label dalam Bahasa Indonesia",
                                },
                            ]
                        },
                        {
                            description: "Sementara yang diperjualbelikan tidak mencantumkan hal-hal tersebut",
                        },
                        {
                            description: "Barang yang diklasifikasikan sebagai barang berbahaya menurut Peraturan Menteri Perdagangan yang berlaku.",
                        },
                        {
                            description: "Segala jenis barang lain yang bertentangan dengan peraturan pengiriman Barang Indonesia.",
                        },
                        {
                            description: "Barang-barang lain yang melanggar ketentuan hukum yang berlaku di Indonesia."
                        },
                        {
                            description: "Penjual wajib memberikan foto dan informasi produk secara lengkap dan jelas sesuai dengan kondisi dan kualitas produk yang dijualnya. Apabila terdapat ketidaksesuaian antara foto dan informasi produk yang diunggah oleh penjual dengan produk yang terima oleh pembeli, maka MyPangan berhak membatalkan/menahan dana transaksi.",
                        },
                        {
                            description: "Penjual wajib memberikan balasan (response) untuk menerima atau menolak pesanan barang pihak pembeli dalam batas waktu 10 menit terhitung sejak adanya notifikasi pesanan barang dari MyPangan. Jika dalam batas waktu tersebut tidak ada balasan dari penjual maka secara otomatis pesanan akan dibatalkan.",
                        },
                        {
                            description: "Demi menjaga kenyamanan pembeli dalam bertransaksi, penjual memahami dan menyetujui bahwa MyPangan berhak melakukan peringatan kepada toko penjual apabila penjual melakukan penolakan, pembatalan dan/atau tidak merespon pesanan barang milik pembeli dengan dugaan untuk memanipulasi transaksi, pelanggaran atas syarat dan ketentuan dan/atau kecurangan atau penyalahgunaan lainnya.",
                        },
                        {
                            description: "Penjual menyetujui dan memahami bahwa dengan menerima data informasi pembeli yang terdapat dalam situs/aplikasi wajib menjaga kerahasiaan dan dilarang menyalahgunakan data informasi pembeli dalam bentuk apapun.",
                        },
                        {
                            description: "Bahwa ketentuan poin 13 diatas, pihak MyPangan tanpa pemberitahuan sebelumnya berhak melakukan investigasi dan memberikan sanksi terhadap dugaan atau laporan penyalahgunaan data pembeli.",
                        },
                        {
                            description: "Penjual memahami dan menyetujui bahwa seluruh pajak sehubungan dengan transaksi penjualan (namun tidak terbatas pada perubahan informasi toko dan/atau barang) akan dilaporkan dan diurus sendiri oleh masing-masing penjual sesuai dengan ketentuan pajak yang berlaku di peraturan perundang-undangan di Indonesia.",
                        },
                        {
                            description: "MyPangan berwenang mengambil keputusan atas permasalahan-permasalahan transaksi yang belum terselesaikan akibat tidak adanya kesepakatan penyelesaian, baik antara penjual dan pembeli, dengan melihat bukti-bukti yang ada.",
                        },
                        {
                            description: "Berdasarkan poin 16 diatas, keputusan MyPangan adalah keputusan akhir, yang tidak dapat diganggu gugat dan mengikat pihak penjual dan pembeli (PARA PIHAK) untuk mematuhinya.",
                        },
                        {
                            description: "Apabila disepakati oleh Penjual dan Pembeli penggunaan Jasa Logistik yang berbeda dari pilihan awal Pembeli dapat dilakukan (dengan ketentuan bahwa tarif pengiriman tersebut adalah di bawah tariff pengiriman awal).",
                        },
                        {
                            description: "Penjual memahami sepenuhnya dan menyetujui bahwa invoice yang diterbitkan adalah atas nama penjual.",
                        }
                    ] 
                },
            ]
        }
    }

    render() {
        return (
            <div className="privacy-policy">
                <div className="privacy-policy-intro">
                    <h1> { this.state.header.title } </h1>
                    {
                        this.state.header.description.map( (item, index) => {
                            return (
                                <p key={index}>
                                    { item }
                                </p>
                            );
                        })
                    }
                </div>
                <div className="privacy-policy-content">
                    <ol>
                        {
                            this.state.list.map( (item, index) => {
                                return(
                                    <div key={index} className="privacy-policy-content-item">
                                        <li> {item.title} </li>

                                        <List data={item.content} />
                                    </div>
                                );
                            } )
                        }
                    </ol>
                </div>
            </div>
        );
    }
}

export default Terms;
