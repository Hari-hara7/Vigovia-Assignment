'use client';

import Home from './home/page';
import Notes from './notes/page';
import Second from './second/page';
import Fourth from './fourth/page';

export default function MainPage() {
  return (
    <main>
      <Home />
      <Second/>
      <Notes />
      <Fourth />
    </main>
  );
}
