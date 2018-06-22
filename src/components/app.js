import React, { Component } from 'react';

import { NoteCreator } from '.';
import { NoteList } from '.';

export default class App extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>Notes</h1>
        </header>
        <section className="note-area">
          <NoteCreator />
          <NoteList />
        </section>
      </main>
    );
  }
}
