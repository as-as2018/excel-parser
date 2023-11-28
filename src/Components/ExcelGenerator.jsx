import React from 'react';
import * as XLSX from 'xlsx';

const ExcelGenerator = () => {
    const generateExcel = () => {
        const data = {

            "Users": [
                {
                    "horse_id": "H0011",
                    "Horse Name": "Morgan",
                    "Date Of Birth": "24-11-2023",
                    "Gender": "stallion",
                    "Birth Origin": "Åland Islands",
                    "Breed": "Hunter",
                    "Breeder Master": "krish",
                    "Color": "White",
                    "Country of Residence": "Afghanistan",
                    "Microchip Number": 554534,
                    "Height": 2,
                    "Weight": 70,
                    "Ability": "Run Fast",
                    "Blood Group": "B +ve",
                    "Fei Passport Number": "FEIP879541",
                    "Fei Passport Expiry Data": 45237,
                    "Fei Registration Number": "thrhry7575455",
                    "Owner Name": "rahish, rohitansh",
                    "Trainer Name": "kerry, himansh",
                    "docs": [
                        {
                            "id": 0,
                            "document_type": null,
                            "issue_date": null,
                            "expiry_date": null,
                            "uploaded_file": null
                        }
                    ]
                },
                {
                    "horse_id": "H0010",
                    "Horse Name": "Ashawa",
                    "Date Of Birth": "24-11-2023",
                    "Gender": "stallion",
                    "Birth Origin": "Albania",
                    "Breed": "Hunter",
                    "Breeder Master": "krish",
                    "Color": "Black",
                    "Country of Residence": "Andorra",
                    "Microchip Number": "875312.2mkljhmn,m",
                    "Height": 7,
                    "Weight": 100,
                    "Ability": "sharp minded",
                    "Blood Group": "O+",
                    "Fei Passport Number": "78712c c",
                    "Fei Passport Expiry Data": 48499,
                    "Fei Registration Number": "76454bcl;bkfn mc, mcb",
                    "Owner Name": "rahish, param, anim khan, ashutosh",
                    "Trainer Name": "kerry, yashwant, parvat, himansh",
                    "docs": [
                        {
                            "doc_id": 2,
                            "document_type": "UId Card",
                            "issue_date": 45248,
                            "expiry_date": 45260
                        }
                    ]
                },
                {
                    "horse_id": "H0009",
                    "Horse Name": "Morgan",
                    "Date Of Birth": "24-11-2023",
                    "Gender": "stallion",
                    "Birth Origin": "Åland Islands",
                    "Breed": "Hunter",
                    "Breeder Master": "krish",
                    "Color": "Black",
                    "Country of Residence": "Åland Islands",
                    "Microchip Number": 554534,
                    "Height": 4,
                    "Weight": 4,
                    "Ability": "Run Fast",
                    "Blood Group": "B +ve",
                    "Fei Passport Number": "FEIP879541",
                    "Fei Passport Expiry Data": 45244,
                    "Fei Registration Number": "thrhry7575455",
                    "Owner Name": "anim khan",
                    "Trainer Name": "yashwant",
                    "docs": [
                        {
                            "doc_id": 3,
                            "document_type": "Aadhar Card",
                            "issue_date": 45248,
                            "expiry_date": 45260
                        }
                    ]
                },
                {
                    "horse_id": "H0008",
                    "Horse Name": "varan",
                    "Date Of Birth": "24-11-2023",
                    "Gender": "stallion",
                    "Birth Origin": "Åland Islands",
                    "Breed": "Hunter",
                    "Breeder Master": "krish",
                    "Color": "Black",
                    "Country of Residence": "Iceland",
                    "Microchip Number": "7898532mbdlbjsobm",
                    "Height": 7.8,
                    "Weight": 150,
                    "Ability": "sharp mind",
                    "Blood Group": "o-",
                    "Fei Passport Number": "kyle9852877",
                    "Fei Passport Expiry Data": 50697,
                    "Fei Registration Number": 78741321320,
                    "Owner Name": "param",
                    "Trainer Name": "kerry",
                    "docs": [
                        {
                            "doc_id": 4,
                            "document_type": "Passport",
                            "issue_date": 45248,
                            "expiry_date": 45260
                        }
                    ]
                },
                {
                    "horse_id": "H0007",
                    "Horse Name": "Neel",
                    "Date Of Birth": "24-11-2023",
                    "Gender": "stallion",
                    "Birth Origin": "Anguilla",
                    "Breed": "Hunter",
                    "Breeder Master": "krish",
                    "Color": "Gray",
                    "Country of Residence": "Dominica",
                    "Microchip Number": "787894ljh323",
                    "Height": 5,
                    "Weight": 32,
                    "Ability": "jumper",
                    "Blood Group": "7889+5",
                    "Fei Passport Number": "7898nlkdjepoenmm",
                    "Fei Passport Expiry Data": 50734,
                    "Fei Registration Number": "jshughns54422313",
                    "Owner Name": "RAMLAL",
                    "Trainer Name": "parvat",
                    "docs": [
                        {
                            "doc_id": 5,
                            "document_type": "National Id Card",
                            "issue_date": 45248,
                            "expiry_date": 45260
                        }
                    ]
                },
                {
                    "horse_id": "H0006",
                    "Horse Name": "sharu",
                    "Date Of Birth": "24-11-2023",
                    "Gender": "stallion",
                    "Birth Origin": "Angola",
                    "Breed": "Mustang",
                    "Breeder Master": "krish",
                    "Color": "Black",
                    "Country of Residence": "Albania",
                    "Microchip Number": "kyle125254",
                    "Height": 8,
                    "Weight": 100,
                    "Ability": "none",
                    "Blood Group": "b-",
                    "Fei Passport Number": "4897b,d;ldnnn",
                    "Fei Passport Expiry Data": 46344,
                    "Fei Registration Number": "bsbkopwwpobdbdmbdb75781231",
                    "Owner Name": "rohitansh",
                    "Trainer Name": "aman",
                    "docs": [
                        {
                            "doc_id": 6,
                            "document_type": "National Id Card",
                            "issue_date": 45248,
                            "expiry_date": 45260
                        }
                    ]
                },
                {
                    "horse_id": "H0005",
                    "Horse Name": "marry",
                    "Date Of Birth": "24-11-2023",
                    "Gender": "stallion",
                    "Birth Origin": "Afghanistan",
                    "Breed": "Mustang",
                    "Breeder Master": "krish",
                    "Color": "Black",
                    "Country of Residence": "Åland Islands",
                    "Microchip Number": "daz4587454",
                    "Height": 8.4,
                    "Weight": 100,
                    "Ability": "ddbuhghdidlbd lkdsbjm784231324845123",
                    "Blood Group": 788986,
                    "Fei Passport Number": 7871211,
                    "Fei Passport Expiry Data": 46351,
                    "Fei Registration Number": "fjdjhdijn ,cmd",
                    "Owner Name": "gaytri",
                    "Trainer Name": "parvat",
                    "docs": [
                        {
                            "doc_id": 7,
                            "document_type": "National Id Card",
                            "issue_date": 45248,
                            "expiry_date": 45260
                        }
                    ]
                },
                {
                    "horse_id": "H0004",
                    "Horse Name": "shashi",
                    "Date Of Birth": "24-11-2023",
                    "Gender": "stallion",
                    "Birth Origin": "Åland Islands",
                    "Breed": "Hunter",
                    "Breeder Master": "krish",
                    "Color": "White",
                    "Country of Residence": "Åland Islands",
                    "Microchip Number": "kyle125254",
                    "Height": 8.7,
                    "Weight": 97,
                    "Ability": 7875450000000000000,
                    "Blood Group": 778764,
                    "Fei Passport Number": 7884210,
                    "Fei Passport Expiry Data": 48506,
                    "Fei Registration Number": "78421321khygh n",
                    "Owner Name": "gaytri",
                    "Trainer Name": "parvat",
                    "docs": [
                        {
                            "doc_id": 8,
                            "document_type": "National Id Card",
                            "issue_date": 45248,
                            "expiry_date": 45260
                        }
                    ]
                },
                {
                    "horse_id": "H0003",
                    "Horse Name": "RAMLAL",
                    "Date Of Birth": "24-11-2023",
                    "Gender": "stallion",
                    "Birth Origin": "Åland Islands",
                    "Breed": "Hunter",
                    "Breeder Master": "krish",
                    "Color": "White",
                    "Country of Residence": "Afghanistan",
                    "Microchip Number": "kyle125254",
                    "Height": 10,
                    "Weight": 10,
                    "Ability": "jumper",
                    "Blood Group": "o",
                    "Fei Passport Number": "FEIP879541",
                    "Fei Passport Expiry Data": 45220,
                    "Fei Registration Number": "k4587451252",
                    "Owner Name": "anim khan",
                    "Trainer Name": "yashwant",
                    "docs": [
                        {
                            "doc_id": 9,
                            "document_type": "National Id Card",
                            "issue_date": 45248,
                            "expiry_date": 45260
                        }
                    ]
                },
                {
                    "horse_id": "H0002",
                    "Horse Name": "rocky",
                    "Date Of Birth": "24-11-2023",
                    "Gender": "stallion",
                    "Birth Origin": "Åland Islands",
                    "Breed": "Mustang",
                    "Breeder Master": "krish",
                    "Color": "Black",
                    "Country of Residence": "India",
                    "Microchip Number": "daz4587454",
                    "Height": 4.1,
                    "Weight": 365,
                    "Ability": "runner",
                    "Blood Group": "O+",
                    "Fei Passport Number": "FEIP879541",
                    "Fei Passport Expiry Data": 45260,
                    "Fei Registration Number": "f457454",
                    "Owner Name": "anim khan, Jay prakash",
                    "Trainer Name": "Arti, yashwant",
                    "docs": [
                        {
                            "id": 0,
                            "document_type": null,
                            "issue_date": null,
                            "expiry_date": null,
                            "uploaded_file": null
                        }
                    ]
                }
            ],
            "docs": [
                {
                    "doc_id": 2,
                    "document_type": "UId Card",
                    "issue_date": 45248,
                    "expiry_date": 45260
                },
                {
                    "doc_id": 3,
                    "document_type": "Aadhar Card",
                    "issue_date": 45248,
                    "expiry_date": 45260
                },
                {
                    "doc_id": 4,
                    "document_type": "Passport",
                    "issue_date": 45248,
                    "expiry_date": 45260
                },
                {
                    "doc_id": 5,
                    "document_type": "National Id Card",
                    "issue_date": 45248,
                    "expiry_date": 45260
                },
                {
                    "doc_id": 6,
                    "document_type": "National Id Card",
                    "issue_date": 45248,
                    "expiry_date": 45260
                },
                {
                    "doc_id": 7,
                    "document_type": "National Id Card",
                    "issue_date": 45248,
                    "expiry_date": 45260
                },
                {
                    "doc_id": 8,
                    "document_type": "National Id Card",
                    "issue_date": 45248,
                    "expiry_date": 45260
                },
                {
                    "doc_id": 9,
                    "document_type": "National Id Card",
                    "issue_date": 45248,
                    "expiry_date": 45260
                },
                {
                    "horse_id": "H00100",
                    "doc_id": 10,
                    "document_type": " Id Card",
                    "issue_date": 45248,
                    "expiry_date": 45260
                }
            ]

        };

        const jsonToSheet = (data) => {
            const ws = XLSX.utils.json_to_sheet(data.Users);
            return ws;
        };

        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, jsonToSheet(data), 'Horse Data');

        XLSX.writeFile(wb, 'HorseData.xlsx', { bookSST: true });
    };

    return (
        <div>
            <button onClick={generateExcel}>Generate Excel</button>
        </div>
    );
};

export default ExcelGenerator;
