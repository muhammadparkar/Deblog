import { v4 as uuidv4 } from 'uuid';

// WARNING: Do NOT expose your Pinata JWT in public repos. For production, use a backend proxy for uploads.

const PINATA_JWT = process.env.REACT_APP_PINATA_JWT || "";

async function storeFiles(file) {
    const ext = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${ext}`;
    const formData = new FormData();
    formData.append('file', file, fileName);
    // Optional: Add metadata
    const metadata = JSON.stringify({ name: fileName });
    formData.append('pinataMetadata', metadata);
    // Optional: Add options
    const options = JSON.stringify({ cidVersion: 0 });
    formData.append('pinataOptions', options);

    const res = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${PINATA_JWT}`
        },
        body: formData
    });
    if (!res.ok) {
        throw new Error('Failed to upload file to Pinata');
    }
    const data = await res.json();
    const imageURI = `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
    return imageURI;
}
export default storeFiles;