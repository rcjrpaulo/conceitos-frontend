import React from 'react';

export default function Header({ children, title }) {
  return (
    <header>
      <h1>{title || 'Titulo padrão quando nao seta prop title no component'}</h1>
    </header>
  );
}