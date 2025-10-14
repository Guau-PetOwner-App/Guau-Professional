// Optional: Admin component to view waitlist leads
// This is for your reference - you can create a separate admin interface

import { useState, useEffect } from 'react';
import { supabase, type WaitlistLead } from '../lib/supabase';

export function WaitlistAdmin() {
  const [leads, setLeads] = useState<WaitlistLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const { data, error } = await supabase
        .from('waitlist_leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        throw error;
      }

      setLeads(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const csv = [
      ['Email', 'Name', 'Business Type', 'Pet Volume', 'Company', 'Phone', 'Created At'],
      ...leads.map(lead => [
        lead.email,
        lead.full_name,
        lead.business_type,
        lead.pet_volume,
        lead.company_name || '',
        lead.phone || '',
        new Date(lead.created_at || '').toLocaleDateString()
      ])
    ].map(row => row.map(field => `"${field}"`).join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `waitlist-leads-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Waitlist Leads ({leads.length})</h1>
        <button 
          onClick={exportToCSV}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Export CSV
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Business</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Volume</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Company</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Phone</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{lead.email}</td>
                <td className="border border-gray-300 px-4 py-2">{lead.full_name}</td>
                <td className="border border-gray-300 px-4 py-2">{lead.business_type}</td>
                <td className="border border-gray-300 px-4 py-2">{lead.pet_volume}</td>
                <td className="border border-gray-300 px-4 py-2">{lead.company_name || '-'}</td>
                <td className="border border-gray-300 px-4 py-2">{lead.phone || '-'}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(lead.created_at || '').toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}