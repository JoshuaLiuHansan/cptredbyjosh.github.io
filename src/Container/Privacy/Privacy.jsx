import React, {Component, Fragment} from 'react';
import './Privacy.scss';

const Paragraph = (props) => {
    return (
        props.data.map( (item, index) => {
            return (
                <p key={index} className="item-paragraph">
                    { item }            
                </p>
            );
        } )
    );
}

const List = (props) => {
    return (
        <Fragment>
            <p className="item-paragraph">
                {props.data.title}
            </p>
            <ul>
                {
                    props.data.list.map( (item, index) => {
                        return(
                            <li key={index}> {item} </li>
                        );
                    })
                }
            </ul>
        </Fragment>
    );
}

class Privacy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: {
                title: "Lingkup Kebijakan Privasi",
                description: [
                    "Situs website /aplikasi ini (www.mypangan.com) dikelola dan dioperasikan oleh MyPangan. Kebijakan Privasi ini menetapkan cara melindungi dan menggunakan informasi yang Anda berikan ketika menggunakan layanan situs / aplikasi ini.",
                    "Kami berkomitmen untuk memastikan bahwa privasi Anda dilindungi. Bila Kami meminta Anda untuk memberikan informasi tertentu yang dapat diidentifikasi ketika menggunakan website ini, maka informasi tersebut itu hanya akan digunakan sesuai dengan pernyataan privasi ini.",
                    "Kami dapat mengubah Kebijakan Privasi ini dari waktu ke waktu dengan melakukan pengurangan ataupun penambahan ketentuan pada halaman ini. Perubahan terhadap kebijakan ini akan Kami umumkan melalui www.mypangan.com atau melalui media lainnya. Anda diharapkan untuk memeriksa halaman ini secara berkala agar Anda mengetahui perubahan-perubahan tersebut. Dengan tetap mengakses dan menggunakan layanan pada situs www.mypangan.com ini, Anda dianggap telah menyetujui perubahan-perubahan ketentuan pada Kebijakan Privasi ini."
                ]
            },
            list: [
                // {
                //     title: "",
                //     description: [
                //         {
                //             type: "list",
                //             content: { title: "", list: "" }
                //         },
                //         {
                //             type: "paragraph",
                //             content: [text]
                //         },
                //     ]
                // }
                {
                    title: "Registrasi",
                    description: [
                        {
                            type: "paragraph",
                            content: [
                                "Anggota (member) yang telah melakukan pendaftaran (registrasi) dapat mengakses, melihat, dan melakukan transaksi di situs www.mypangan.com.",
                                "Untuk mendaftar pada situs www.mypangan.com, Anda harus memberikan berbagai informasi yang Kami perlukan sebagaimana tercantum di bawah ini."
                            ]
                        }
                    ]
                },
                {
                    title: "Informasi yang Kami minta di website",
                    description: [
                        {
                            type: "list",
                            content: {
                                title: "Informasi mengenai identitas diri yang Kami dapat secara sukarela dari Anda melalui situs www.mypangan.com adalah:",
                                list: [
                                    "Nama lengkap",
                                    "Alamat surat elektronik (email)",
                                    "Nomor telepon selular (handphone)/telepon",
                                    "Alamat lengkap",
                                    "Alamat tempat usaha"
                                ]
                            }
                        },
                        {
                            type: "paragraph",
                            content: [
                                "Kami mengasumsikan bahwa semua informasi dan perubahan-perubahan yang Anda berikan di atas sekarang, atau di masa yang akan datang adalah akurat dan benar. Apabila informasi dan perubahan-perubahan yang Anda berikan tersebut ternyata terbukti tidak benar, maka dengan ini Kami menyatakan tidak bertanggung jawab atas segala akibat yang dapat terjadi sehubungan dengan pemberian informasi dan perubahan-perubahan yang tidak benar tersebut."
                            ]
                        }
                    ] 
                },
                {
                    title: "Apa yang Kami lakukan dengan informasi yang Kami kumpulkan?",
                    description: [
                        {
                            type: "list",
                            content: { 
                                title: "Kami memerlukan informasi sebagaimana tersebut di atas untuk:", 
                                list: [
                                    "Kepentingan konfirmasi pesanan",
                                    "Kepentingan mengirim/mengambil pesanan",
                                    "Kepentingan transaksi pembayaran",
                                    "Kepentingan riset pasar",
                                    "Kepentingan pengembangan situs www.mypangan.com",
                                    "Memberikan informasi/mengirimkan informasi promosi secara berkala kepada Anda bila terdapat suatu penawaran dan/atau promosi atas produk-produk baru, penawaran khusus, atau informasi lain yang Kami anggap Anda perlukan di situs www.mypangan.com",
                                    "Mengumpulkan data transaksi antara Anda dan Kami dan atau mitra usaha Kami, termasuk informasi mengenai penggunaan Anda terhadap produk-produk mypangan dan layanan yang Kami sediakan.",
                                    "Catatan internal/administrasi Kami.",
                                ] 
                            }
                        }
                    ]
                },
                {
                    title: "Keamanan",
                    description: [
                        {
                            type: "paragraph",
                            content: [
                                "Kami berkomitmen untuk memastikan bahwa informasi yang Anda berikan kepada Kami dalam keadaan aman. Untuk mencegah akses tidak sah, Kami melakukan tindakan pengamanan fisik, elektronik, dan prosedur manajerial yang diperlukan untuk melindungi informasi Anda yang Kami kumpulkan secara online."
                            ]
                        }
                    ]
                },
                {
                    title: "Koneksi dengan website lain",
                    description: [
                        {
                            type: "paragraph",
                            content: [
                                "Untuk keperluan referensi dan kenyamanan Anda, Website Kami mungkin menyediakan link ke situs-situs lain. Namun, ketika Anda menggunakan link-link ini, Kami tidak bertanggung jawab untuk melindungi privasi dan informasi apapun yang Anda berikan ketika mengunjungi situs-situs tersebut karena Kami tidak mengetahui kebijakan penanganan informasi pribadi di situs-situs sebagaimana dimaksud dan tidak bertanggung jawab atas konten mereka. Anda harus berhati-hati, mempelajari dan melihat pernyataan privasi yang berlaku di situs tersebut.",
                                "Entitas apapun yang Anda pilih sebagai kontak atau berinteraksi baik yang terdaftar dalam direktori ataupun di tempat lain selain dari Situs www.mypangan.com, adalah sepenuhnya tanggung jawab layanan tersebut pada Anda, dan Anda setuju bahwa Situs www.mypangan.com tidak dapat dikenakan tindakan apapun untuk kerusakan atau biaya yang keluar atas interaksi yang terjadi antara Anda dengan layanan yang bersangkutan."
                            ]
                        }
                    ]
                },
                {
                    title: "Pengendalian informasi pribadi Anda",
                    description: [
                        {
                            type: "list",
                            content: { 
                                title: "Anda dapat memilih untuk membatasi pengumpulan atau penggunaan informasi pribadi Anda dengan cara berikut:", 
                                list: [
                                    "Dalam akun keanggotaan (member) Anda, cari kotak yang dapat Anda klik untuk menunjukkan bahwa Anda tidak ingin alamat surat elektronika (email) Anda digunakan untuk mengirimkan berbagai informasi pemasaran (newsletter).",
                                    "Jika Anda sebelumnya telah sepakat untuk Kami menggunakan informasi pribadi Anda untuk mengirimkan informasi pemasaran, Anda dapat mengubahnya setiap saat dengan mengubah pengaturan (setting) akun Anda."
                                ] 
                            }
                        },
                    ]
                },
                {
                    title: "Pendistribusian informasi pribadi Anda",
                    description: [
                        {
                            type: "list",
                            content: { 
                                title: "Kami tidak akan menjual, mendistribusikan atau menyewakan informasi pribadi Anda kepada pihak ketiga, kecuali terbatas untuk hal-hal sebagai berikut:", 
                                list: [
                                    "Apabila diharuskan oleh hukum dan peraturan perundang-undangan yang berlaku di Republik Indonesia.",
                                    "Apabila diperlukan oleh mitra Kami dalam rangka melaksanakan pekerjaannya seperti pemenuhan pesanan, pengiriman/pengambilan pesanan, proses pembayaran transaksi, pengiriman surat / email / sms / media komunikasi lainnya, analisa data, layanan bantuan, pemenuhan hasil pencarian, peningkatan sistem keamanan dan privasi, serta peningkatan dan pengembangan situs www.mypangan.com.",
                                    "Apabila terjadi pengalihan unit aset atau kepemilikan usaha kepada pihak lain. Selain untuk kepentingan-kepentingan sebagaimana disebutkan di atas, Anda akan menerima pemberitahuan apabila akan terjadi pendistribusian informasi pribadi Anda kepada pihak lain, dan Anda berhak untuk meminta agar informasi pribadi Anda tidak diikutsertakan."
                                ] 
                            }
                        },
                    ]
                },
                {
                    title: "Hukum yang berlaku",
                    description: [
                        {
                            type: "paragraph",
                            content: [
                                "Syarat-syarat dan ketentuan dalam Kebijakan Privasi ini tunduk kepada hukum di wilayah Negara Kesatuan Republik Indonesia."
                            ]
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

                                        {
                                            item.description.map( (v, i) => {
                                                switch(v.type) {
                                                    case 'paragraph':
                                                        return (
                                                            <Paragraph key={i} data={v.content} />
                                                        );
                                                    case 'list':
                                                        return (
                                                            <List key={i} data={v.content} />
                                                        );
                                                    default:
                                                        return '';
                                                }
                                            } )
                                        }

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

export default Privacy;
