'use client'

import Header from './components/molecules/Header'
import Profile from './components/molecules/Profile'
import Task from './components/molecules/Task'

export default function Home() {
  return (
    <main className="mx-auto flex flex-col gap-8 pt-12 px-32">
      <div>
        <Header />
      </div>
      <div className="flex flex-col gap-2">
        <Task />
        <Task />
        <Task />
      </div>
    </main>
  );
}
