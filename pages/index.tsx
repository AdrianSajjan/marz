import React, { Fragment, Suspense } from "react"
import Counter from "../components/counter"
import { Link } from "../framework/client/router"

export function Page() {
	const timeBeforeSleep = new Date()
	// await new Promise((resolve) => setTimeout(resolve, 100))
	const timeAfterSleep = new Date()
	return (
		<Fragment>
			<h1>Hello world!</h1>
			<p>Time before sleep: {timeBeforeSleep.toISOString()}</p>
			<p>Time after sleep: {timeAfterSleep.toISOString()}</p>
			<Counter />
			<br />
			<Link href="/subdir">go to /subdir</Link>
		</Fragment>
	)
}
