'use client';

import Home from './home/page';
import Notes from './notes/page';
import Second from './second/page';

export default function MainPage() {
  return (
    <main>
      <Home />
      <Second/>
      <Notes />
    </main>
  );
}
