'use client';

import { useState } from 'react';

const orders = [
  { label: 'First', value: 40, detail: 'First reported sales month' },
  { label: 'Second', value: 39, detail: 'Second reported sales month' },
  { label: 'Third', value: 60, detail: 'Third reported sales month' },
  { label: 'Final', value: 90, detail: 'Final reported sales month' },
];

export default function Results() {
  const [view, setView] = useState('orders');
  return <div className="result-panel">
    <div className="chart-top"><div><span className="micro">BUSINESS & SEARCH OUTCOMES</span><h3 aria-live="polite">{view === 'orders' ? 'A growing order book.' : 'Discovery at catalogue scale.'}</h3></div>
      <div className="chart-switch" role="group" aria-label="Choose results chart">
        <button type="button" aria-pressed={view === 'orders'} onClick={() => setView('orders')}>Order value</button>
        <button type="button" aria-pressed={view === 'indexing'} onClick={() => setView('indexing')}>Indexing</button>
      </div>
    </div>
    {view === 'orders' ? <figure className="orders-figure">
      <div className="bar-chart" role="img" aria-label="Approximate monthly order value in Indian rupees: first reported month 40 thousand, second 39 thousand, third 60 thousand, final 90 thousand.">
        <div className="chart-axis" aria-hidden="true"><span>₹100k</span><span>₹75k</span><span>₹50k</span><span>₹25k</span><span>₹0</span></div>
        <div className="bars-plot">{orders.map((point, i) => <div className="bar-column" key={point.label}>
          <div className={`result-bar ${i === 3 ? 'last' : ''}`} style={{ '--bar-height': `${point.value}%` }}><strong>~₹{point.value}k</strong></div>
          <span>{point.label}<small>reported month</small></span>
        </div>)}</div>
      </div>
      <figcaption>Approximate overall website order value, in INR. Four recalled monthly observations; calendar dates are omitted. These figures are not channel-attributed revenue.</figcaption>
    </figure> : <figure className="index-figure">
      <div className="index-ring" role="img" aria-label="Over 300 thousand indexed pages within an approximately 900 thousand URL website, roughly one third of the reported footprint."><div><strong>300k+</strong><span>pages indexed</span></div></div>
      <div className="index-explain"><span className="micro">REPORTED CATALOGUE FOOTPRINT</span><h4>~900,000 URLs</h4><p>Indexing grew from zero to over 300,000 pages while catalogue organisation and technical SEO continued.</p><div className="legend"><span><i />Indexed pages, approximately</span><span><i />Remaining catalogue footprint</span></div><p className="small-note">Illustrative proportion based on approximate recalled totals. Remaining URLs are not classified by index eligibility.</p></div>
      <figcaption>Country-specific product availability shaped the total URL count. This is a footprint comparison, not a measured indexing timeline.</figcaption>
    </figure>}
    <details className="chart-data"><summary>View the figures and how to read them <span aria-hidden="true">＋</span></summary>
      <div className="table-scroll"><table><caption>Reported figures behind both chart views</caption><thead><tr><th scope="col">Observation</th><th scope="col">Approximate figure</th><th scope="col">Interpretation</th></tr></thead><tbody>
        {orders.map(p => <tr key={p.label}><th scope="row">{p.detail}</th><td>~₹{p.value},000</td><td>Total website order value</td></tr>)}
        <tr><th scope="row">Indexed pages</th><td>300,000+</td><td>Reported search index footprint</td></tr><tr><th scope="row">Website URLs</th><td>~900,000</td><td>Country-specific catalogue footprint</td></tr>
      </tbody></table></div>
    </details>
  </div>;
}
