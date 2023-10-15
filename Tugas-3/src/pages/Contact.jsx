// ContactPage.js

import React, { useState } from "react";
import { Form, Input, Button } from "react-bootstrap";

const ContactPage = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      nama,
      email,
      pesan,
    };

    setPesan([...pesan, data]);
  };

  return (
    <div>
      <h2>Kontak</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nama">
          <Form.Label>Nama</Form.Label>
          <Input
            type="text"
            name="nama"
            placeholder="Masukkan nama Anda"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Input
            type="email"
            name="email"
            placeholder="Masukkan email Anda"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="pesan">
          <Form.Label>Pesan</Form.Label>
          <Input
            type="text"
            name="pesan"
            placeholder="Masukkan pesan Anda"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
          />
        </Form.Group>

        <Button type="submit">Kirim</Button>
      </Form>

      <ul>
        {pesan.map((data, i) => (
          <li key={i}>{data.nama} - {data.email} - {data.pesan}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contact
