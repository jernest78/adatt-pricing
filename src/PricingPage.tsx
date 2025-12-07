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
			price: 149,
			cadence: "/yr",
			blurb: "1 operator, 1 AD forest.",
			features: [
				"30-day trial",
				"AD + Exchange + Graph offboarding",
				"Group cleanup + manager clear",
				"Hide from GAL + mailbox to Shared",
				"Auto-reply assistant",
				"Device + MFA method removal",
				"Audit log file",
			],
			cta: "Buy Solo",
			href: getPlanHref("solo"),
			popular: false,
		},
		{
			name: "Team",
			price: 399,
			cadence: "/yr",
			blurb: "Up to 5 operators, 1 AD forest.",
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
			price: 999,
			cadence: "/yr",
			blurb: "Unlimited operators, up to 3 forests/tenants.",
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
		<div className="min-h-screen bg-gradient-to-b from-[#0E2430] to-[#102F3C] text-slate-100">
			<header className="mx-auto max-w-6xl px-6 py-10">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="h-10 w-10 rounded-2xl bg-[#4F46E5]/10 ring-1 ring-[#4F46E5]/30 grid place-content-center">
							🔐
						</div>
						<div className="text-xl font-semibold tracking-tight">ADATT</div>
					</div>
					<nav className="flex items-center gap-2">
						<a
							href="#pricing"
							className="rounded-xl px-4 py-2 ring-1 ring-slate-600/60 hover:ring-slate-400/80"
						>
							Pricing
						</a>
						<a
							href="#faq"
							className="rounded-xl px-4 py-2 ring-1 ring-slate-600/60 hover:ring-slate-400/80"
						>
							FAQ
						</a>
						<a
							href="https://discord.com/channels/1422930170968543244/1422930171836502018"
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-xl px-4 py-2 ring-1 ring-slate-600/60 hover:ring-slate-400/80"
						>
							Discord
						</a>
					</nav>
				</div>
			</header>

			<section className="mx-auto max-w-6xl px-6 pb-6">
				<div className="grid md:grid-cols-2 gap-10 items-center">
					<div>
						<h1 className="text-4xl md:text-5xl font-semibold leading-tight">
							30-second secure offboarding for AD + Exchange Online
						</h1>
						<p className="mt-4 text-slate-300">
							A PowerShell GUI that removes risk fast: group cleanup, GAL hide,
							mailbox to shared, auto-reply, Graph device & MFA removal, plus audit
							logging.
						</p>
						<p className="mt-4 text-lg text-slate-200 font-medium">
							ADATT simplifies complex Active Directory and Microsoft 365 user management tasks, saving IT teams hours of manual work while ensuring consistent, compliant, and auditable user termination processes.
						</p>
						<div className="mt-6 flex flex-wrap gap-3">
							<a
								href="#pricing"
								className="rounded-xl bg-[#4F46E5] px-5 py-3 font-medium text-slate-100 hover:bg-[#6366F1]"
							>
								View pricing
							</a>
							<a
								href="#how"
								className="rounded-xl px-5 py-3 ring-1 ring-slate-600/60 hover:ring-slate-400/80"
							>
								How it works
							</a>
						</div>
					</div>
					<div className="rounded-2xl bg-slate-900/40 p-2 ring-1 ring-white/10 overflow-hidden">
						<img 
							src="/adatt-screenshot.PNG" 
							alt="ADATT Application Interface" 
							className="rounded-lg w-full shadow-2xl transition-transform duration-300 hover:scale-[1.02] cursor-pointer object-contain"
							loading="eager"
						/>
					</div>
				</div>
			</section>

			<section id="pricing" className="mx-auto max-w-6xl px-6 py-10">
				<h2 className="text-3xl font-semibold">
					Simple licensing. 30-day trial.
				</h2>
				<p className="mt-2 text-slate-300">
					Pick a plan. Taxes and invoices handled by Lemon Squeezy.
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
								className="mt-6 inline-block rounded-xl bg-[#4F46E5] px-4 py-2 font-medium text-slate-100 hover:bg-[#6366F1]"
							>
								{t.cta}
							</a>
						</div>
					))}
				</div>

				<div className="mt-6 rounded-xl bg-slate-900/40 p-5 ring-1 ring-white/10">
					<div className="font-medium">Enterprise</div>
					<p className="text-sm text-slate-300">
						Multi-forest/tenant, SSO packaging, custom policies. From $2,499/yr.
					</p>
					<a
						href="mailto:adatt@unifosec.com?subject=ADATT%20Enterprise"
						className="mt-3 inline-block rounded-xl px-4 py-2 ring-1 ring-slate-600/60 hover:ring-slate-400/80"
					>
						Talk to sales
					</a>
				</div>
			</section>

			<section id="how" className="mx-auto max-w-6xl px-6 py-10">
				<h2 className="text-3xl font-semibold">How activation works</h2>
				<ol className="mt-4 list-decimal pl-6 text-slate-300">
					<li>Buy a plan → receive a Lemon Squeezy license key.</li>
					<li>
						Open ADATT → Enter License → we activate the key once and return a
						signed offline license file.
					</li>
					<li>
						ADATT verifies the signature locally on every run. No constant internet
						required.
					</li>
				</ol>
			</section>

			<section id="faq" className="mx-auto max-w-6xl px-6 py-10">
				<h2 className="text-3xl font-semibold">FAQ</h2>
				<div className="mt-4 grid gap-4">
					{faqs.map(({ q, a }) => (
						<details
							key={q}
							className="rounded-xl bg-slate-900/40 p-5 ring-1 ring-white/10"
						>
							<summary className="cursor-pointer font-medium">{q}</summary>
							<p className="mt-2 text-sm text-slate-300">{a}</p>
						</details>
					))}
				</div>
			</section>

			<footer className="mx-auto max-w-6xl px-6 pb-16 text-sm text-slate-400">
				© {new Date().getFullYear()} ADATT. All rights reserved.
			</footer>
		</div>
	);
}
