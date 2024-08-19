
function Sidebar({ activeTab, setActiveTab }) {
  const tabs = ['Alarm Clock', 'Timer', 'Stopwatch', 'Time'];

  return (
    <nav className="sidebar">
      {tabs.map(tab => (
        <button
          key={tab}
          className={activeTab === tab ? 'active' : ''}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
}

export default Sidebar;