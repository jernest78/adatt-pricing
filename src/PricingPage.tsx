import React from "react";
import { getPlanHref } from "./checkout";

// Moved out of the component and exported for reuse by FaqPage
export const faqs = [
	{
		q: "How does licensing work?",
		a: "Each purchase issues a Lemon Squeezy license key. In-app activation exchanges the key for a signed offline license file; the app verifies it locally.",
	},
	{
		q: "Do you offer a trial?",
		a: "Yes, the app starts with a 30-day trial per machine. After that, actions lock until you activate a license.",
	},
	{
		q: "Can I move my license?",
		a: "Deactivate the old instance in your portal, then re-activate on the new machine.",
	},
	{
		q: "What’s supported?",
		a: "AD account disable + cleanup, Exchange mailbox conversion + auto-reply, Graph device/MFA removal, and audit logging.",
	},
];

export default function PricingPage() {
	const tiers = [
		{
			name: "Solo Admin",
			price: 299,
			cadence: "/yr",
			blurb: "Perfect for individual system administrators. 1 operator, 1 AD forest.",
			features: [
				"30-day free trial",
				"AD + Exchange + Graph employee termination",
				"Automated group cleanup + manager removal",
				"Hide from GAL + convert mailbox to Shared",
				"Auto-reply assistant",
				"Microsoft 365 device + MFA removal",
				"Complete audit log file",
			],
			cta: "Buy Solo",
			href: getPlanHref("solo"),
			popular: false,
		},
		{
			name: "Team",
			price: 799,
			cadence: "/yr",
			blurb: "Ideal for IT teams and small MSPs. Up to 5 operators, 1 AD forest.",
			features: [
				"Everything in Solo",
				"Priority support",
				"Minor upgrades included",
				"License key activation portal",
				"Offline license file (signed)",
			],
			cta: "Buy Team",
			href: getPlanHref("team"),
			popular: true,
		},
		{
			name: "Business",
			price: 1999,
			cadence: "/yr",
			blurb: "For IT consulting firms and large MSPs. Unlimited operators, up to 3 forests/tenants.",
			features: [
				"Everything in Team",
				"Unlimited operators",
				"Multi-forest/tenant (up to 3)",
				"Onboarding calls (x2)",
				"Upgrade assurance",
			],
			cta: "Buy Business",
			href: getPlanHref("business"),
			popular: false,
		},
	] as const;

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] text-slate-100 relative overflow-hidden">
			{/* Animated gradient orbs */}
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
			<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
			<div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
			
			<div className="relative z-10">
				<header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
					<div className="flex items-center justify-between flex-wrap gap-4">
						<div className="flex items-center gap-3">
							<div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 ring-2 ring-purple-400/50 grid place-content-center shadow-lg shadow-purple-500/50">
								🔐
							</div>
						<div className="text-xl font-semibold tracking-tight">ADATT</div>
					</div>
						<nav className="flex items-center gap-2 flex-wrap">
							<a
								href="#pricing"
								className="rounded-xl px-3 sm:px-4 py-2 text-sm sm:text-base ring-1 ring-slate-600/60 hover:ring-purple-400/60 hover:bg-purple-500/10 transition-all"
							>
								Pricing
							</a>
							<a
								href="#faq"
								className="rounded-xl px-3 sm:px-4 py-2 text-sm sm:text-base ring-1 ring-slate-600/60 hover:ring-purple-400/60 hover:bg-purple-500/10 transition-all"
							>
								FAQ
							</a>
							<a
								href="https://discord.com/channels/1422930170968543244/1422930171836502018"
								target="_blank"
								rel="noopener noreferrer"
								className="rounded-xl px-3 sm:px-4 py-2 text-sm sm:text-base ring-1 ring-slate-600/60 hover:ring-purple-400/60 hover:bg-purple-500/10 transition-all"
							>
								Discord
							</a>
					</nav>
				</div>
			</header>

			<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
				<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
					<div className="order-2 lg:order-1">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-blue-400">
						Continuous Offboarding
					</h1>
					<h2 className="mt-4 text-2xl sm:text-3xl font-semibold text-slate-100">
						Automate Your Way
					</h2>
					<p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
					The essential employee termination and offboarding tool for IT administrators, system admins, IT MSPs, and Microsoft administrators. Eliminate manual employee offboarding checklists, simplify security, risk, insider threat, compliance, and stay audit-ready with automated employee account deactivation workflows.
					</p>
					<form className="mt-6 flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); alert('Email submitted: ' + e.currentTarget.email.value); }}>
						<input
							type="email"
							name="email"
							placeholder="Enter your email"
							required
							className="flex-1 rounded-xl px-4 py-3 text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500"
						/>
						<button type="submit" className="rounded-xl bg-pink-600 px-6 py-3 text-sm sm:text-base font-medium text-white hover:bg-pink-700 transition-colors shadow-lg hover:shadow-pink-500/50">
							Get started
						</button>
					</form>
				</div>
				<div className="order-1 lg:order-2">
					<div className="rounded-xl overflow-hidden shadow-2xl">
						<iframe 
							width="100%" 
							height="315" 
						src="https://www.youtube.com/embed/7XHabcxlRwg?si=9d_fb5BFvk_uYBgi&controls=1&modestbranding=1&rel=0" 
							frameBorder="0" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
							referrerPolicy="strict-origin-when-cross-origin" 
							allowFullScreen
							className="w-full aspect-video"
						></iframe>
					</div>
					<div className="mt-4 text-center">
						<span className="text-slate-300">or </span>
						<a
							href="mailto:adatt@unifosec.com?subject=ADATT%20Demo%20Request"
							className="inline-block rounded-xl bg-green-600 px-6 py-2 text-sm sm:text-base font-medium text-white hover:bg-green-700 transition-colors shadow-lg hover:shadow-green-500/50"
						>
							Request a demo
						</a>
					</div>
				</div>
			</div>
		</section>

		{/* Companies Section */}
		<section className="bg-slate-900 py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h2 className="text-2xl sm:text-3xl font-semibold text-center text-slate-100 mb-8">
					Trusted by IT Consulting Firms, MSPs, and System Administrators
				</h2>
				<div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
					<button className="flex flex-col items-center justify-center h-32 w-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl p-4 hover:from-purple-600/30 hover:to-blue-600/30 transition-all border border-purple-400/30 hover:border-purple-400/60 shadow-lg hover:shadow-purple-500/50">
						<div className="text-3xl mb-2">🚫</div>
						<span className="text-sm font-semibold text-slate-100 text-center">Terminate User Access</span>
					</button>
					<button className="flex flex-col items-center justify-center h-32 w-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl p-4 hover:from-blue-600/30 hover:to-cyan-600/30 transition-all border border-blue-400/30 hover:border-blue-400/60 shadow-lg hover:shadow-blue-500/50">
						<div className="text-3xl mb-2">📱</div>
					<span className="text-sm font-semibold text-slate-100 text-center">Remove Registered Devices</span>
					</button>
					<button className="flex flex-col items-center justify-center h-32 w-full bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl p-4 hover:from-green-600/30 hover:to-emerald-600/30 transition-all border border-green-400/30 hover:border-green-400/60 shadow-lg hover:shadow-green-500/50">
						<div className="text-3xl mb-2">🔐</div>
						<span className="text-sm font-semibold text-slate-100 text-center">Reset MFA</span>
					</button>				<button className="flex flex-col items-center justify-center h-32 w-full bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-xl p-4 hover:from-orange-600/30 hover:to-amber-600/30 transition-all border border-orange-400/30 hover:border-orange-400/60 shadow-lg hover:shadow-orange-500/50">
					<div className="text-3xl mb-2">🔓</div>
					<span className="text-sm font-semibold text-slate-100 text-center">Sign Out Sessions from M365</span>
				</button>					<button className="flex flex-col items-center justify-center h-32 w-full bg-gradient-to-br from-pink-600/20 to-rose-600/20 rounded-xl p-4 hover:from-pink-600/30 hover:to-rose-600/30 transition-all border border-pink-400/30 hover:border-pink-400/60 shadow-lg hover:shadow-pink-500/50">
						<div className="text-3xl mb-2">👥</div>
						<span className="text-sm font-semibold text-slate-100 text-center">Bulk Offboard<br/>(2-100 Max)</span>
					</button>
				</div>
			</div>
		</section>

		<section id="pricing" className="mx-auto max-w-6xl px-6 py-10">
			<h2 className="text-3xl font-semibold">
				Employee Offboarding Software Pricing for IT Admins
			</h2>
			<p className="mt-2 text-slate-300">
				Flexible licensing for IT teams, system administrators, and MSPs. 30-day free trial included.
			</p>

				<div className="mt-8 grid gap-6 md:grid-cols-3">
					{tiers.map((t) => (
						<div
							key={t.name}
							className={`relative rounded-2xl bg-slate-900/40 p-6 ring-1 ${
								t.popular ? "ring-[#4F46E5]/60" : "ring-white/10"
							}`}
						>
							{t.popular && (
								<div className="absolute -top-3 right-4 rounded-full bg-[#A5B4FC] px-3 py-1 text-xs font-semibold text-slate-900">
									Most popular
								</div>
							)}
							<div className="text-lg font-semibold">{t.name}</div>
							<div className="mt-3 flex items-baseline gap-1">
								<div className="text-4xl font-bold">{`$${t.price}`}</div>
								<div className="text-slate-400">{t.cadence}</div>
							</div>
							<p className="mt-3 text-sm text-slate-300">{t.blurb}</p>
							<ul className="mt-4 grid gap-2 text-sm text-slate-300">
								{t.features.map((f) => (
									<li key={f}>• {f}</li>
								))}
							</ul>
							<a
								href={t.href}
								className="mt-6 inline-block rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 font-medium text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all"
							>
								{t.cta}
							</a>
						</div>
					))}
				</div>

<div className="mt-6 rounded-xl bg-gradient-to-br from-slate-900/40 via-purple-900/20 to-slate-900/40 p-5 ring-1 ring-purple-400/30 backdrop-blur-sm hover:ring-purple-400/60 transition-all">
				<div className="font-medium">Enterprise</div>
				<p className="text-sm text-slate-300">
					Multi-forest/tenant, SSO packaging, custom policies. From $2,499/yr.
				</p>
				<a
					href="mailto:adatt@unifosec.com?subject=ADATT%20Enterprise"
					className="mt-3 inline-block rounded-xl px-4 py-2 ring-1 ring-purple-400/60 hover:ring-purple-400 hover:bg-purple-500/10 transition-all"
					>
						Talk to sales
					</a>
				</div>
			</section>

			<section id="how" className="mx-auto max-w-6xl px-6 py-10">
			<h2 className="text-3xl font-semibold">How Our Employee Offboarding Tool Works</h2>
			<ol className="mt-4 list-decimal pl-6 text-slate-300">
				<li>Buy a plan → receive your license key for the offboarding software.</li>
				<li>
					Open ADATT → Enter License → we activate the key once and return a
					signed offline license file.
				</li>
				<li>
					ADATT verifies the signature locally on every run. No constant internet
					required - perfect for secure IT environments.
				</li>
			</ol>
		</section>

			<section id="faq" className="mx-auto max-w-6xl px-6 py-10">
				<h2 className="text-3xl font-semibold">Frequently Asked Questions - Employee Offboarding Software</h2>
				<div className="mt-4 grid gap-4">
					{faqs.map(({ q, a }) => (
						<details
							key={q}
						className="rounded-xl bg-slate-900/40 p-5 ring-1 ring-white/10 hover:ring-purple-400/40 backdrop-blur-sm transition-all"
					>
						<summary className="cursor-pointer font-medium">{q}</summary>
						<p className="mt-2 text-sm text-slate-300">{a}</p>
					</details>
				))}
			</div>
		</section>

		<footer className="mx-auto max-w-6xl px-6 pb-16 text-sm text-slate-400">
			<p className="mb-2">© {new Date().getFullYear()} ADATT - Employee Offboarding Automation Tool for IT Professionals</p>
			<p className="text-xs text-slate-500">Keywords: IT Admin Tools | System Administrator Software | MSP Solutions | Microsoft 365 Management | Employee Termination | Account Deactivation | IT Consulting</p>
		</footer>
	</div>
	</div>
);
}
