const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const root=process.cwd();
test('Admin navigation resolves to real pages',()=>{
 const main=fs.readFileSync(path.join(root,'index.html'),'utf8');
 for(const page of ['dashboard','approvals','reports','users']) assert.ok(main.includes('admin/'+page+'.html'));
});
test('All admin pages exist and load shared assets',()=>{
 for(const page of ['dashboard','approvals','reports','users']){
  const html=fs.readFileSync(path.join(root,'admin',page+'.html'),'utf8');
  assert.ok(html.includes('css/admin.css'));
  assert.ok(html.includes('js/admin.js'));
  assert.ok(html.includes('data-page="'+page+'"'));
 }
});
test('Admin script shares site storage and enforces admin role',()=>{
 const js=fs.readFileSync(path.join(root,'js/admin.js'),'utf8');
 assert.ok(js.includes("campusloop_oceanic_v2"));
 assert.ok(js.includes("actor.role!=='admin'"));
});
test('Admin actions cover approvals, reports and student accounts',()=>{
 const js=fs.readFileSync(path.join(root,'js/admin.js'),'utf8');
 for(const action of ['approve-listing','reject-listing','resolve-report','dismiss-report','toggle-user']) assert.ok(js.includes(action));
});
test('Admin stylesheet uses Oceanic Luxe tokens',()=>{
 const css=fs.readFileSync(path.join(root,'css/admin.css'),'utf8');
 for(const color of ['#2D415A','#C56F4E','#F1E5DA','#FBF7F2']) assert.ok(css.includes(color));
});
