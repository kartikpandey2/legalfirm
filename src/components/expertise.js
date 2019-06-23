import React from "react"

const styles = {
  h1: {
    textAlign: "center",
  },
  text: {
    fontSize: "medium",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginBottom: "3%",
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  container: {
    padding: "3% 15%",
  },
}

const servicesArray = [
  "Consultancy and Legal research",
  "Legal documentation",
  "Legal Notice/ Demand Notice",
  "Agreements and Contracts Vetting/Drafting",
  "Complaints under Section 138 of Negotiable Instrument Act, 1881",
  "MACT Claim Petition",
  "Complaints under Consumer Protection Act, 1986",
  "Trust Petitions",
  "Police Complaints and Criminal Litigation",
  "Transfer of property Act and Property Litigation",
  "Delhi Rent Control Act",
  "Insolvency and Bankruptcy Act, 2016",
  "Real Estate (Regulation and Development) Act, 2016 (RERA)",
  "Companies Act, IT Act, Labour Matters, Factories Act",
  "Banking and Insurance Matters Capital Markets & Securities Law",
  "Corporate & Commercial",
  "Corporate Restructuring & Insolvency",
  "Employment",
  "Family Matters",
  "Dispute Resolution and Arbitration",
  "Intellectual Property Rights",
  "General Corporate",
  "Contract Management",
]

const Expertise = () => {
  const services = servicesArray.map(service => (
    <li key={service}>{service}</li>
  ))
  return (
    <section className="odd">
      <h1 style={styles.h1}>Our Expertise</h1>

      <div>
        <p style={styles.text}>
          Our aim is to provide clear, concise and practical advice with
          time-bound deliverables to support our client’s business objectives.
          The firm's perspective is based on its knowledge of the
          sector/industry, local laws, and customs. Our team of Advocates and
          Experts understand issues across a broad spectrum of business and
          legal practice. Our Advocates have experience of handling over various
          cases from the past many years at all over India. Our Advocates has
          Specialization in drafting and reviewing contracts entered by an
          Organization. The further risk mapping exercise is also our strong
          point.
        </p>
      </div>
      <div style={styles.cardContainer}>
        <ul>{services}</ul>
      </div>
    </section>
  )
}

export default Expertise
