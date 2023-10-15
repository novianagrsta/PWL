import React, { useState } from 'react';

const Pesan = () => {
  const [jumlahPesan, setJumlahPesan] = useState(0);

  const tambahPesan = () => {
    setJumlahPesan(jumlahPesan + 1);
  };

  return (
    <div>
      <h2>Pesan</h2>
      <p>Jumlah pesan: {jumlahPesan}</p>
      <button onClick={tambahPesan}>Tambah Pesan</button>
    </div>
  );
};

export default Pesan;