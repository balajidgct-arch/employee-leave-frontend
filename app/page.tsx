const stats = [
  {
    label: "Available leave",
    value: "12 days",
    detail: "Remaining balance",
    color: "text-green-600",
  },
  {
    label: "Pending requests",
    value: "2",
    detail: "Awaiting approval",
    color: "text-amber-600",
  },
  {
    label: "Approved this year",
    value: "5",
    detail: "Approved requests",
    color: "text-blue-600",
  },
  {
    label: "Rejected requests",
    value: "1",
    detail: "Rejected requests",
    color: "text-red-600",
  },
];

const requests = [
  {
    type: "Casual Leave",
    dates: "20–21 October 2026",
    status: "Pending",
  },
  {
    type: "Sick Leave",
    dates: "8 October 2026",
    status: "Approved",
  },
  {
    type: "Earned Leave",
    dates: "2–4 September 2026",
    status: "Rejected",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 md:flex">
      <aside className="bg-slate-900 p-6 text-white md:min-h-screen md:w-64 md:shrink-0">
        <h1 className="text-2xl font-bold">LeaveManage</h1>
        <p className="mt-1 text-sm text-slate-400">
          Employee portal
        </p>

        <nav className="mt-8 space-y-2">
          {["Dashboard", "Apply for Leave", "My Requests", "Leave Calendar"].map(
            (item, index) => (
              <a
                key={item}
                href={index === 0 ? "/" : "#"}
                className={`block rounded-lg px-4 py-3 text-sm ${
                  index === 0
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                {item}
              </a>
            )
          )}
        </nav>

        <div className="mt-8 border-t border-slate-700 pt-5">
          <p className="text-xs text-slate-400">
            Signed in as
          </p>
          <p className="mt-1 font-medium">Demo Employee</p>
        </div>
      </aside>

      <section className="min-w-0 flex-1 p-5 sm:p-8">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">
              Employee workspace
            </p>
            <h2 className="mt-1 text-3xl font-bold tracking-tight">
              Dashboard
            </h2>
            <p className="mt-2 text-slate-500">
              Welcome back! Here's your leave overview.
            </p>
          </div>

          <a
            href="#"
            className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            + Apply for leave
          </a>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-sm text-slate-500">
                {stat.label}
              </p>
              <p className={`mt-3 text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-slate-400">
                {stat.detail}
              </p>
            </article>
          ))}
        </div>

        <section className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <h3 className="text-lg font-semibold">
            Recent leave requests
          </h3>

          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[540px] text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="p-3 font-medium">Leave type</th>
                  <th className="p-3 font-medium">Dates</th>
                  <th className="p-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr
                    key={request.type}
                    className="border-t border-slate-100"
                  >
                    <td className="p-3 font-medium">
                      {request.type}
                    </td>
                    <td className="p-3 text-slate-500">
                      {request.dates}
                    </td>
                    <td className="p-3">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          request.status === "Approved"
                            ? "bg-green-50 text-green-700"
                            : request.status === "Pending"
                              ? "bg-amber-50 text-amber-700"
                              : "bg-red-50 text-red-700"
                        }`}
                      >
                        {request.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <p className="mt-6 text-xs text-slate-400">
          Demo data only. Live Laravel API integration comes next.
        </p>
      </section>
    </main>
  );
}