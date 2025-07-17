'use client';

import Home from './home/page';
import Notes from './notes/page';
import Second from './second/page';
import Third from './third/page';
import Fourth from './fourth/page';
import Fivth from './fivth/page';

export default function MainPage() {
  return (
    <main>
      <Home />
      <Second/>
      <Third />
      <Notes />
      <Fourth />
      <Fivth />
    </main>
  );
}
