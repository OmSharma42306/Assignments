import React, { useState } from 'react';
import { Database, Upload, ArrowLeftRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { Select } from '../components/Select';
import { Checkbox } from '../components/Checkbox';
import { ProgressBar } from '../components/ProgressBar';
import { StatusBadge } from '../components/StatusBadge';

type DataSource = 'clickhouse' | 'flatfile';
type Status = 'idle' | 'connecting' | 'fetching' | 'ingesting' | 'completed' | 'error';

export const DataIngestion: React.FC = () => {
  const [source, setSource] = useState<DataSource>('clickhouse');
  const [status, setStatus] = useState<Status>('idle');
  const [progress, setProgress] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Data Ingestion Tool</h1>
          <p className="mt-2 text-gray-600">Transfer data between ClickHouse and Flat Files seamlessly</p>
        </div>

        <Card>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Source Configuration</h2>
              <StatusBadge status={status} />
            </div>

            <Select
              label="Data Source"
              options={[
                { value: 'clickhouse', label: 'ClickHouse Database' },
                { value: 'flatfile', label: 'Flat File' }
              ]}
              value={source}
              onChange={(e) => setSource(e.target.value as DataSource)}
            />

            {source === 'clickhouse' ? (
              <div className="grid grid-cols-2 gap-4">
                <Input label="Host" placeholder="localhost" />
                <Input label="Port" placeholder="9440" type="number" />
                <Input label="Database" placeholder="default" />
                <Input label="User" />
                <Input label="JWT Token" type="password" className="col-span-2" />
              </div>
            ) : (
              <div className="space-y-4">
                <Input label="File Path" type="file" accept=".csv,.txt" />
                <Input label="Delimiter" placeholder="," />
              </div>
            )}
          </div>
        </Card>

        <Card>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Column Selection</h2>
            <div className="grid grid-cols-3 gap-4">
              <Checkbox label="id" />
              <Checkbox label="name" />
              <Checkbox label="email" />
              <Checkbox label="created_at" />
              <Checkbox label="updated_at" />
              <Checkbox label="status" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900">Progress</h2>
            <ProgressBar progress={progress} />
            <div className="flex justify-between text-sm text-gray-600">
              <span>Records processed: 1,234</span>
              <span>Total records: 5,000</span>
            </div>
          </div>
        </Card>

        <div className="flex justify-end space-x-4">
          <Button variant="outline">Preview Data</Button>
          <Button icon={ArrowLeftRight}>Start Ingestion</Button>
        </div>
      </div>
    </div>
  );
}